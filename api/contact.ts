import type { VercelRequest, VercelResponse } from "@vercel/node";

type ResendSendResult = {
  data?: { id?: string };
  error?: { message?: string };
};

function escapeHtml(input: string) {
  return String(input)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || process.env.RESEND_FROM;
  const from = fromEmail || "Gravia <onboarding@resend.dev>";

  if (!apiKey) return res.status(500).json({ ok: false, error: "Missing RESEND_API_KEY" });
  if (!toEmail) return res.status(500).json({ ok: false, error: "Missing CONTACT_TO_EMAIL" });

  const { Resend } = require("resend");
  const resend = new Resend(apiKey);

  try {
    const { name, email, phone, message } = req.body || {};
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    const subject = `New lead from Gravia: ${name}`;
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5">
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message).replaceAll("\n", "<br/>")}</p>
      </div>
    `;

    const result = (await resend.emails.send({
      from,
      to: [toEmail],
      replyTo: email,
      subject,
      html,
    })) as ResendSendResult;

    if (result?.error) {
      return res.status(500).json({ ok: false, error: result.error.message || "Failed to send" });
    }

    return res.status(200).json({ ok: true, id: result?.data?.id });
  } catch (err: any) {
    console.error("/api/contact error", err);
    return res.status(500).json({ ok: false, error: err?.message || "Server error" });
  }
}

module.exports = handler;
export {};
