// app/api/lead/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  throw new Error(
    "Missing RESEND_API_KEY. Add it to .env.local and restart the dev server.",
  );
}

const resend = new Resend(apiKey);

function esc(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getIP(req: Request) {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0].trim();
  return "unknown";
}

const COOLDOWN_MS = 20_000; // 20s per IP
const ipLastHit = new Map<string, number>();

export async function POST(req: Request) {
  try {
    const to = process.env.RESEND_TO_EMAIL;
    const from = process.env.RESEND_FROM_EMAIL;

    if (!to || !from) {
      return NextResponse.json(
        {
          error:
            "Missing RESEND_TO_EMAIL or RESEND_FROM_EMAIL in env vars (.env.local).",
        },
        { status: 500 },
      );
    }

    // rate limit
    const ip = getIP(req);
    const now = Date.now();
    const last = ipLastHit.get(ip) ?? 0;
    if (now - last < COOLDOWN_MS) {
      return NextResponse.json(
        { error: "Too many requests. Please wait 20 seconds and try again." },
        { status: 429 },
      );
    }
    ipLastHit.set(ip, now);

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { error: "Invalid JSON body." },
        { status: 400 },
      );
    }

    const source = String(body.source || "unknown").trim();
    const packageTitle = String(body.packageTitle || "Custom Quote").trim();
    const packagePriceLabel = String(body.packagePriceLabel || "").trim();

    const userName = String(body.userName || "").trim();
    const userPhone = String(body.userPhone || "").trim();
    const userEmail = String(body.userEmail || "").trim();
    const userMessage = String(body.userMessage || "").trim();

    if (!userName || !userPhone) {
      return NextResponse.json(
        { error: "Please provide your name and phone number." },
        { status: 400 },
      );
    }

    const phoneClean = userPhone.replace(/[^\d+]/g, "");

    const waPhone = phoneClean.startsWith("0") ? "4" + phoneClean : phoneClean;

    const subject = `[AFACERE] ${packageTitle} • ${userName} • ${
      packagePriceLabel || "No budget"
    }`;

    const rows: Array<[string, string]> = [
      ["Source", source],
      ["Package", packageTitle],
      ["Price/Budget", packagePriceLabel || "—"],
      ["Name", userName],
      ["Phone", userPhone],
      ["Email", userEmail || "—"],
      ["Time", new Date().toLocaleString("ro-RO")],
    ];

    const rowsHtml = rows
      .map(
        ([k, v]) => `
          <div style="display:flex;gap:12px;padding:10px 12px;border-radius:14px;background: rgba(255,255,255,.06);margin-bottom:8px;">
            <div style="width:120px;min-width:120px;font-size:12px;opacity:.75;">${esc(
              k,
            )}</div>
            <div style="font-size:14px;font-weight:700;">${esc(v)}</div>
          </div>
        `,
      )
      .join("");

    const messageHtml = userMessage
      ? `
        <div style="margin-top:10px;padding:12px 12px;border-radius:14px;background: rgba(255,255,255,.06);">
          <div style="font-size:12px;opacity:.75;margin-bottom:6px;">Message</div>
          <div style="white-space:pre-wrap;font-size:14px;font-weight:700;">${esc(
            userMessage,
          )}</div>
        </div>
      `
      : "";

    const html = `
      <div style="margin:0;padding:0;background:#0b1220">
        <div style="max-width:680px;margin:0 auto;padding:28px 16px;">
          
          <div style="
            background: linear-gradient(135deg, rgba(37,99,235,1), rgba(56,189,248,1));
            border-radius: 18px;
            padding: 22px 22px;
            color: white;
            font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto;
            box-shadow: 0 20px 60px rgba(0,0,0,.35);
          ">
            <div style="font-size:12px;opacity:.9;letter-spacing:.08em;text-transform:uppercase;">
              New Website Offer Request
            </div>
            <div style="font-size:22px;font-weight:900;margin-top:6px;">
              ${esc(userName)}
            </div>
            <div style="margin-top:10px;font-size:14px;opacity:.95;">
              <b>${esc(packageTitle)}</b> • ${esc(
                packagePriceLabel || "Budget: —",
              )}
            </div>

            <div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap;">
              <a href="tel:${esc(phoneClean)}" style="
                display:inline-block;
                padding:12px 14px;
                border-radius: 14px;
                background: rgba(255,255,255,.18);
                color: white;
                text-decoration:none;
                font-weight:900;
                font-size:14px;
              ">Call back</a>

              <a href="https://wa.me/${esc(waPhone)}" style="
                display:inline-block;
                padding:12px 14px;
                border-radius: 14px;
                background: rgba(34,197,94,.92);
                color: white;
                text-decoration:none;
                font-weight:900;
                font-size:14px;
              ">WhatsApp</a>
            </div>
          </div>

          <div style="
            margin-top:14px;
            background: rgba(255,255,255,.06);
            border: 1px solid rgba(255,255,255,.10);
            border-radius: 18px;
            padding: 18px 18px;
            color: rgba(255,255,255,.92);
            font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto;
          ">
            <div style="font-size:13px;font-weight:800;margin-bottom:10px;opacity:.95;">
              Lead details
            </div>

            ${rowsHtml}
            ${messageHtml}

            <div style="margin-top:14px;font-size:12px;opacity:.6;">
              Sent automatically from your website.
            </div>
          </div>

        </div>
      </div>
    `;

    const sendPayload: Parameters<typeof resend.emails.send>[0] = {
      from,
      to: [to],
      subject,
      html,
    };

    if (userEmail && isValidEmail(userEmail)) {
      (sendPayload as any).replyTo = userEmail;
    }

    const { data, error } = await resend.emails.send(sendPayload);

    if (error) {
      const msg =
        (error as any)?.message ||
        (typeof error === "string" ? error : "Email send failed");
      console.error("RESEND ERROR:", error);
      return NextResponse.json({ error: msg }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (e: any) {
    console.error("API /api/lead ERROR:", e);
    return NextResponse.json(
      { error: e?.message || "Server error" },
      { status: 500 },
    );
  }
}
