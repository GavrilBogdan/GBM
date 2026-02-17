import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function esc(s: string) {
  return String(s || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    // ✅ move env reads INSIDE handler
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.RESEND_TO_EMAIL;
    const from = process.env.RESEND_FROM_EMAIL;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Server misconfigured: missing RESEND_API_KEY." },
        { status: 500 },
      );
    }
    if (!to || !from) {
      return NextResponse.json(
        {
          error:
            "Server misconfigured: missing RESEND_TO_EMAIL or RESEND_FROM_EMAIL.",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { error: "Invalid JSON body." },
        { status: 400 },
      );
    }

    // ✅ keep YOUR payload keys (edit if needed)
    const userName = String(body.userName || "").trim();
    const userPhone = String(body.userPhone || "").trim();
    const packageName = String(body.packageName || "Custom Quote").trim();
    const packagePrice = String(body.packagePrice || "").trim();

    if (!userName || !userPhone) {
      return NextResponse.json(
        { error: "Missing required fields: userName, userPhone" },
        { status: 400 },
      );
    }

    const phoneClean = userPhone.replace(/[^\d+]/g, "");
    const waPhone = phoneClean.startsWith("0") ? "4" + phoneClean : phoneClean;

    const subject = `[AFACERE] CERERE CUSTOM • ${userName} • ${
      packagePrice || "No budget"
    }`;

    const html = `
      <div style="margin:0;padding:0;background:#0b1220">
        <div style="max-width:640px;margin:0 auto;padding:28px 16px;">
          <div style="
            background: linear-gradient(135deg, rgba(37,99,235,1), rgba(56,189,248,1));
            border-radius: 18px;
            padding: 22px 22px;
            color: white;
            font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto;
            box-shadow: 0 20px 60px rgba(0,0,0,.35);
          ">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;">
              <div>
                <div style="font-size:12px;opacity:.9;letter-spacing:.08em;text-transform:uppercase;">
                  Ai primit o noua cerere de oferta
                </div>
                <div style="font-size:22px;font-weight:800;margin-top:6px;">
                  ${esc(userName)}
                </div>
              </div>
              <div style="
                background: rgba(255,255,255,.18);
                padding: 10px 12px;
                border-radius: 12px;
                font-weight: 800;
                font-size: 13px;
                text-align:right;
                white-space:nowrap;
              ">
                ${esc(packagePrice || "Budget: —")}
              </div>
            </div>

            <div style="margin-top:14px;font-size:14px;opacity:.95;">
              Package: <b>${esc(packageName)}</b>
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
            <div style="padding:12px 12px;border-radius:14px;background: rgba(255,255,255,.06);">
              <div style="font-size:12px;opacity:.8;">Phone</div>
              <div style="font-size:16px;font-weight:800;margin-top:2px;">
                ${esc(userPhone)}
              </div>
            </div>

            <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px;">
              <a href="tel:${esc(phoneClean)}" style="
                display:inline-block;
                padding:12px 14px;
                border-radius: 14px;
                background: rgba(37,99,235,.95);
                color: white;
                text-decoration:none;
                font-weight:800;
                font-size:14px;
              ">Call back</a>

              <a href="https://wa.me/${esc(waPhone)}" style="
                display:inline-block;
                padding:12px 14px;
                border-radius: 14px;
                background: rgba(34,197,94,.92);
                color: white;
                text-decoration:none;
                font-weight:800;
                font-size:14px;
              ">WhatsApp</a>
            </div>

            <div style="margin-top:14px;font-size:12px;opacity:.75;">
              Sent from: <b>/form</b>
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
