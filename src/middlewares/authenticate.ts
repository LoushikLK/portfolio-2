import * as jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const auth =
  (handler: any) =>
  async (req: NextApiRequest, res: NextApiResponse, next: any) => {
    try {
      let token = req.cookies.authToken || req.headers.authorization;

      if (!token) throw new Error("No token provided");

      let jwtToken: any = await jwt.verify(
        token.split(" ")[1],
        process.env.JWT_SECRET_KEY as string
      );

      if (!jwtToken) throw new Error("Provided token is not valid");
      req.body = {
        ...req.body,
        user: jwtToken._id,
      };
      return handler(req, res, next);
    } catch (error: any) {
      if (error instanceof Error) {
        return res.status(400).json({
          status: "FAIL",
          message: error?.message,
        });
      }
      res.status(500).json({
        status: "FAIL",
        message: "Something went wrong!",
      });
    }
  };

export default auth;
