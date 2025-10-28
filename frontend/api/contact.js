import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const SENDER_EMAIL = "onboarding@resend.dev";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed." });
  }

  const { firstName, lastName, company, phone, email, message } = req.body;

  const RECIPIENT_EMAIL = process.env.MY_CONTACT_EMAIL;

  if (!RECIPIENT_EMAIL) {
    return res.status(500).json({ message: "Recipient email not configured." });
  }

  const emailHtml = `
    <h2>✅ New Portfolio Contact Submission</h2>
    <p><strong>From:</strong> ${firstName} ${lastName} (${email})</p>
    <p><strong>Company:</strong> ${company || "N/A"}</p>
    <p><strong>Phone:</strong> ${phone || "N/A"}</p>
    <hr>
    <h3>Message:</h3>
    <p>${message}</p>
    `;

  try {
    const data = await resend.emails.send({
      from: SENDER_EMAIL,
      to: RECIPIENT_EMAIL,
      subject: `NEW PORTFOLIO CONTACT: ${firstName} ${lastName}`,
      html: emailHtml,
    });
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Resend Error:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
}
