import { UserType } from "@/types/user";
import { model, Model, models, Schema } from "mongoose";

const userSchema = new Schema<UserType, Model<UserType>>(
  {
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
      default: "USER",
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel =
  models.user || model<UserType, Model<UserType>>("user", userSchema);
