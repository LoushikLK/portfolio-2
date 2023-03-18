// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "@/middlewares/connectDb";
import { MessageModel } from "@/models/message";
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  status: string;
  message: string;
  data?: any;
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
        throw new Error("subject,email and message are required");

      //create a message

      const messageData = await MessageModel.create({
        subject,
        email,
        message,
      });

      if (!messageData) throw new Error("message sending failed");

      const mailOptions = {
        from: process.env.EMAIL,
        to: "loushikkumargiri@gmail.com",
        subject: `Mail in Website for ${subject}`,
        text: message,
      };

      res
        .status(200)
        .json({ status: "SUCCESS", message: "Thank you for messaging!" });

      transporter.sendMail(mailOptions);
    } catch (error) {
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

export default dbConnect(handler);
