import { WorkType } from "@/types/work";
import { model, Model, Schema } from "mongoose";

const workSchema = new Schema<WorkType, Model<WorkType>>(
  {
    isFeatured: {
      type: Boolean,
      default: false,
    },
    title: String,
    description: String,
    tooling: [
      {
        type: String,
      },
    ],
    githubLink: String,
    websiteLink: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

export const ExpertiseModel = model<WorkType, Model<WorkType>>(
  "work",
  workSchema
);
