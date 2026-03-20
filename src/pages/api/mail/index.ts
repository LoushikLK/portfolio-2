// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  status: string;
  message: string;
  data?: any;
};

// Simple HTML escape function to prevent XSS in email clients
const escapeHtml = (str: string) => {
  return str.replace(/[&<>"']/g, (m) => {
    switch (m) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#039;";
      default:
        return m;
    }
  });
};

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_SERVICE_PASSWORD,
  },
});

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    try {
      const { subject, email, message } = req.body;

      if (!subject || !email || !message)
        throw new Error("subject, email and message are required");

      const sanitizedName = escapeHtml(subject);
      const sanitizedEmail = escapeHtml(email);
      const sanitizedMessage = escapeHtml(message);

      const htmlTemplate = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #10e95633; border-radius: 16px; overflow: hidden; background-color: #051009; color: #ffffff; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          <div style="background: linear-gradient(90deg, #051009 0%, #10e956 50%, #051009 100%); padding: 2px;">
            <div style="background-color: #051009; padding: 25px; text-align: center;">
              <h1 style="color: #10e956; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 4px; font-weight: 800;">Incoming_Transmission</h1>
              <p style="color: #10e95666; margin: 5px 0 0 0; font-size: 10px; text-transform: uppercase; letter-spacing: 2px;">Secure_Link_Established</p>
            </div>
          </div>
          <div style="padding: 40px 30px;">
            <div style="margin-bottom: 30px; border-left: 2px solid #10e95633; padding-left: 20px;">
              <p style="margin: 0; font-size: 10px; color: #10e956; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">SenderIdentifier</p>
              <p style="margin: 0; font-size: 18px; font-weight: 600; color: #ffffff;">${sanitizedName}</p>
            </div>
            <div style="margin-bottom: 30px; border-left: 2px solid #10e95633; padding-left: 20px;">
              <p style="margin: 0; font-size: 10px; color: #10e956; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">ReturnPath</p>
              <p style="margin: 0; font-size: 15px; color: #ffffff; opacity: 0.9;">${sanitizedEmail}</p>
            </div>
            <div style="margin-top: 40px;">
              <p style="margin: 0; font-size: 10px; color: #10e956; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 15px;">PayloadContents</p>
              <div style="padding: 25px; background-color: #0a1a0f; border-radius: 12px; border: 1px solid #10e95622; line-height: 1.8; color: #d1d5db; font-size: 15px; white-space: pre-wrap; box-shadow: inset 0 2px 10px rgba(0,0,0,0.2);">${sanitizedMessage}</div>
            </div>
          </div>
          <div style="background-color: #10e9560a; padding: 20px; text-align: center; border-top: 1px solid #10e95611;">
            <p style="margin: 0; font-size: 9px; color: #10e95666; text-transform: uppercase; letter-spacing: 2px;">
              Automated Routing via System_Core // loushik.dev
            </p>
          </div>
        </div>
      `;

      const mailOptions = {
        from: process.env.EMAIL,
        to: "loushikkumargiri@gmail.com",
        subject: `[UPLINK] Transmission from ${sanitizedName}`,
        text: `Sender: ${subject}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: htmlTemplate,
      };

      await transporter.sendMail(mailOptions);

      res
        .status(200)
        .json({ status: "SUCCESS", message: "Thank you for messaging!" });
    } catch (error) {
      console.error("Mail Error:", error);
      if (error instanceof Error) {
        return res.status(404).json({
          status: "FAIL",
          message: error?.message,
        });
      }
      res.status(404).json({
        status: "FAIL",
        message: "Something went wrong",
      });
    }
  }
};

export default handler;
