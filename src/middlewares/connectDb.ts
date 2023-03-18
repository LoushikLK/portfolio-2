import mongoose, { ConnectOptions } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

const dbConnect =
  (handler: any) => async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const MONGO_URI: any = process.env.MONGO_URI;
      if (mongoose.connections[0].readyState) {
        // Use current db connection
        return handler(req, res);
      }

      console.log(MONGO_URI);

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
