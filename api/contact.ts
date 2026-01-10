import type { VercelRequest, VercelResponse } from "@vercel/node";

const DEFAULT_HEADER_NAME = "X-API-Key";

async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  try {
    const { name, email, phone, message } = req.body || {};
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    const webhookUrl = process.env.MAKE_WEBHOOK_URL;
    if (!webhookUrl) {
      return res.status(500).json({ ok: false, error: "Missing MAKE_WEBHOOK_URL" });
    }

    const headerName = process.env.MAKE_WEBHOOK_HEADER || DEFAULT_HEADER_NAME;
    const apiKey = process.env.MAKE_WEBHOOK_KEY;

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(apiKey ? { [headerName]: apiKey } : {}),
      },
      body: JSON.stringify({ name, email, phone, message }),
    });

    if (!response.ok) {
      const detail = await response.text();
      return res.status(502).json({ ok: false, error: "Make webhook failed", detail });
    }

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error("/api/contact error", err);
    return res.status(500).json({ ok: false, error: err?.message || "Server error" });
  }
}

module.exports = handler;
export {};
