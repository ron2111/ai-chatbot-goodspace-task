import express from "express";
import { config } from "dotenv";
import morgan from "morgan"; // request logs handler
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
config();
const app = express();

//middlewares
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET)); // to send cookie from backend to frontend

//remove it in production
app.use(morgan("dev"));

app.use("/api/v1", appRouter);

export default app;
