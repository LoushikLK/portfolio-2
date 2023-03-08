import { UserType } from "@/types/user";
import { model, Model, Schema } from "mongoose";

const userSchema = new Schema<UserType, Model<UserType>>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

export const UserModel = model<UserType, Model<UserType>>("user", userSchema);
