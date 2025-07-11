import { CorsOptions } from "cors";
import dotenv from "dotenv";

dotenv.config();

const whitelist = [
  process.env.FRONTEND_URL ?? "https://tasksmanuel.netlify.app/",
];

export const corsConfig: CorsOptions = {
  origin: whitelist,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
