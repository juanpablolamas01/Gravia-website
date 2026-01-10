import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Permitir preflight (si algún día tu form se consume cross-domain)
  if (req.method === "OPTIONS") return res.status(204).end();

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  try {
    const { name, email, phone, message } = req.body ?? {};

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    // Email que te llega a vos (lead)
    const subject = `New lead from Gravia: ${name}`;
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5">
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(String(name))}</p>
        <p><strong>Email:</strong> ${escapeHtml(String(email))}</p>
        <p><strong>Phone:</strong> ${escapeHtml(String(phone))}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(String(message)).replaceAll("\n", "<br/>")}</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Gravia <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL!], // tu email receptor
      replyTo: String(email),              // para responder directo al lead
      subject,
      html,
    });

    if (error) {
      return res.status(500).json({ ok: false, error: error.message });
    }

    return res.status(200).json({ ok: true, id: data?.id });
  } catch (err: any) {
    return res.status(500).json({ ok: false, error: "Server error" });
  }
}