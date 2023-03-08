import mongoose, { ConnectOptions } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

const MONGO_URI: any = process.env.MONGO_URL;

const dbConnect =
  (handler: any) => async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      if (mongoose.connections[0].readyState) {
        // Use current db connection
        return handler(req, res);
      }
      // Use new db connection
      await mongoose.connect(MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      } as ConnectOptions);
      return handler(req, res);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "FAIL",
        message: "Connection to database failed.",
      });
    }
  };

export default dbConnect;
