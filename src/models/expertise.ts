import { ExpertiseType } from "@/types/expertise";
import { model, Model, Schema } from "mongoose";

const expertiseSchema = new Schema<ExpertiseType, Model<ExpertiseType>>(
  {
    title: String,
    icon: String,
  },
  {
    timestamps: true,
  }
);

export const ExpertiseModel = model<ExpertiseType, Model<ExpertiseType>>(
  "expertise",
  expertiseSchema
);
