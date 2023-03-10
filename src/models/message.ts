import { MessageType } from "@/types/message";
import { model, Model, Schema } from "mongoose";

const messageSchema = new Schema<MessageType, Model<MessageType>>(
  {
    subject: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const MessageModel = model<MessageType, Model<MessageType>>(
  "message",
  messageSchema
);
