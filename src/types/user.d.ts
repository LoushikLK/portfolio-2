import { Document } from "mongoose";

export interface UserType extends Document {
  name: string;
  email: string;
  password: string;
  role: "ADMIN" | "USER";
}
