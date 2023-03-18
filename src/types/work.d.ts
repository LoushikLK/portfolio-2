import { Document } from "mongoose";

export interface WorkType extends Document {
  isFeatured: boolean;
  title: string;
  description: string;
  tooling: string[];
  githubLink: string;
  websiteLink: string;
  imagePath: string;
  imageUrl: string;
}
