import { Document } from "mongoose";

export interface ExpertiseType extends Document {
  title: string;
  icon: string;
}
