import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const SENDER_EMAIL = "onboarding@resend.dev";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed." });
  }

  const { firstName, lastName, phone, email, projectType, budget, details } =
    req.body;
  const RECIPIENT_EMAIL = process.env.MY_CONTACT_EMAIL;

  if (!RECIPIENT_EMAIL) {
    return res.status(500).json({ message: "Recipient email not configured." });
  }

  const emailHtml = `
    <h2> New Quote Request Received!</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <hr>
    <h3>Project Details:</h3>
    <p><strong>Type:</strong> ${projectType}</p>
    <p><strong>Budget:</strong> ${budget}</p>
    <p><strong>Details/ Scope:</strong></p>
    <p>${details}</p>
    `;

  try {
    const data = await resend.emails.send({
      from: SENDER_EMAIL,
      to: RECIPIENT_EMAIL,
      subject: `NEW QUOTE REQUEST: ${projectType}`,
      html: emailHtml,
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Resend Error:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
}
