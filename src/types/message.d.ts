import { Document } from "mongoose";

export interface MessageType extends Document {
  email: string;
  subject: string;
  message: string;
}
