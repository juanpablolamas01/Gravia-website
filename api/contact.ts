const RESEND_API_URL = "https://api.resend.com/emails";

const buildEmailContent = (payload: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) => {
  const { name, email, phone, message } = payload;

  return {
    subject: "Nuevo lead desde el formulario de contacto",
    text: [
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Telefono: ${phone || "-"}`,
      "",
      "Mensaje:",
      message,
    ].join("\n"),
    html: `
      <h2>Nuevo lead desde el formulario de contacto</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefono:</strong> ${phone || "-"}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  };
};

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFrom = process.env.RESEND_FROM;
  const resendTo = process.env.RESEND_TO;

  if (!resendApiKey || !resendFrom || !resendTo) {
    return res.status(500).json({ error: "Missing email configuration" });
  }

  const content = buildEmailContent({ name, email, phone, message });

  try {
    const response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: resendFrom,
        to: resendTo.split(",").map((entry) => entry.trim()),
        reply_to: email,
        subject: content.subject,
        text: content.text,
        html: content.html,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      return res.status(500).json({ error: "Email send failed", detail: errorBody });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: "Email send failed" });
  }
}
