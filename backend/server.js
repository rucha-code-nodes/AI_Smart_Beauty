import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import chatRoute from "./routes/chat.js"

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
origin: "http://localhost:3000", // your React URL 3001
  credentials: true
}));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("DB Error:", err));

app.use("/api/auth", authRoutes);
app.use("/api/ai", chatRoute);

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
