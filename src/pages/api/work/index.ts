// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "@/middlewares/connectDb";
import formidable from "formidable";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: string;
  message: string;
  data?: any;
};

//set bodyparser
export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    try {
      const {
        isFeatured,
        title,
        description,
        tooling,
        githubLink,
        websiteLink,
      } = req.body;

      const form = formidable();

      form.parse(req, (err, fields, files) => {
        console.log(err);
        console.log(fields);
      });

      if (
        !isFeatured ||
        !title ||
        !description ||
        !tooling ||
        !githubLink ||
        !websiteLink
      )
        throw new Error("all fields are required");
      //create a user

      res
        .status(200)
        .json({ status: "SUCCESS", message: "work created successfully" });
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
