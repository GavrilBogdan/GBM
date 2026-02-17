// app/api/contact/route.ts
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

export async function POST(req: Request) {
  try {
    const to = process.env.RESEND_TO_EMAIL;
    const from = process.env.RESEND_FROM_EMAIL;

    if (!to || !from) {
      return NextResponse.json(
        { error: "Missing RESEND_TO_EMAIL or RESEND_FROM_EMAIL in env vars." },
        { status: 500 },
      );
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { error: "Invalid JSON body." },
        { status: 400 },
      );
    }

    const name = String(body.name || body.userName || "").trim();
    const email = String(body.email || body.userEmail || "").trim();
    const message = String(body.message || body.userMessage || "").trim();

    if (!name) {
      return NextResponse.json(
        { error: "Please provide your name." },
        { status: 400 },
      );
    }
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }
    if (!message || message.length < 3) {
      return NextResponse.json(
        { error: "Please write a short message." },
        { status: 400 },
      );
    }

    const subject = `[CONTACT] ${name}`;

    const html = `
      <div style="margin:0;padding:0;background:#0b1220;">
        <div style="max-width:680px;margin:0 auto;padding:28px 16px;">
          
          <div style="
            background: linear-gradient(135deg, rgba(37,99,235,1), rgba(56,189,248,1));
            border-radius: 18px;
            padding: 22px 22px;
            color: #fff;
            font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto;
            box-shadow: 0 20px 60px rgba(0,0,0,.35);
          ">
            <div style="font-size:12px;opacity:.9;letter-spacing:.08em;text-transform:uppercase;">
              New Contact Message
            </div>
            <div style="font-size:22px;font-weight:900;margin-top:6px;">
              ${esc(name)}
            </div>
            <div style="margin-top:10px;font-size:14px;opacity:.95;">
              <b>Email:</b> <span style="word-break:break-word;">${esc(email)}</span>
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
              Message
            </div>

            <div style="
              padding: 14px 14px;
              border-radius: 14px;
              background: rgba(255,255,255,.06);
              white-space: pre-wrap;
              word-break: break-word;
              font-size: 14px;
              font-weight: 650;
              line-height: 1.6;
            ">${esc(message)}</div>

            <div style="margin-top:14px;font-size:12px;opacity:.65;">
              Sent from: <b>/contact</b> • ${esc(new Date().toLocaleString("ro-RO"))}
            </div>
          </div>

        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      subject,
      html,
      replyTo: email,
    });

    if (error) {
      console.error("RESEND ERROR:", error);
      return NextResponse.json(
        { error: (error as any)?.message || "Email send failed." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (e: any) {
    console.error("API /api/contact ERROR:", e);
    return NextResponse.json(
      { error: e?.message || "Server error" },
      { status: 500 },
    );
  }
}
