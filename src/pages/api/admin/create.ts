// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "@/middlewares/connectDb";
import { UserModel } from "@/models/user";
import { createHash } from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: string;
  message: string;
  data?: any;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password)
        throw new Error("name,email and password are required");

      //hash password

      const hashPassword = createHash("sha256").update(password).digest("hex");

      //create a user

      const newUser = await UserModel.create({
        name,
        email,
        hashPassword,
      });

      if (!newUser) throw new Error("user creation failed");

      res
        .status(200)
        .json({ status: "SUCCESS", message: "user created successfully" });
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
