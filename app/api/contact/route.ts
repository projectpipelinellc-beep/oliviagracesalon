import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Contact form submission endpoint.
 *
 * No email-sending service is wired up yet. Once the salon owner picks a
 * provider (Resend, Postmark, SendGrid, etc.), set RESEND_API_KEY and
 * CONTACT_TO_EMAIL as environment variables and this route will actually
 * send the message — until then it honestly reports that it isn't
 * configured rather than silently discarding submissions.
 */
export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();

  if (name.length < 2 || !EMAIL_RE.test(email) || message.length < 10) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    return NextResponse.json(
      {
        error:
          "Contact form email delivery is not configured yet. Set RESEND_API_KEY and CONTACT_TO_EMAIL to enable it.",
      },
      { status: 503 }
    );
  }

  const phone = String(body.phone || "").trim();
  const service = String(body.service || "").trim();

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Olivia Grace Salon Website <onboarding@resend.dev>`,
        to: toEmail,
        reply_to: email,
        subject: `New inquiry from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          phone && `Phone: ${phone}`,
          service && `Service of interest: ${service}`,
          "",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
  }
}
