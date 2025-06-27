// File: app/api/contact/route.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed." });
  }

  // Body parsen, falls nötig
  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ success: false, message: "Invalid JSON." });
    }
  }

  const { firstName, lastName, email, phoneNumber, postCode, city, street, houseNumber } = body;

  if (!firstName || !lastName || !email || !phoneNumber || !postCode || !city || !street || !houseNumber) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Form" <${process.env.SMTP_USER}>`,
      to: process.env.SITE_RECEIVER,
      subject: "New form from website",
      html: `
        <h2>New Contact Form</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Post Code:</strong> ${postCode}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Street:</strong> ${street}</p>
        <p><strong>House Number:</strong> ${houseNumber}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    return res
      .status(500)
      .json({ success: false, message: "Failed to send email." });
  }
}
