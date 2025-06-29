import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { corsConfig } from "./config/cors";
import { connectDB } from "./config/db";
import taskRouter from "./router/taskRouter";

dotenv.config(); // ✅ Cargar variables de entorno

const app = express();

// ✅ Middleware CORS
app.use(cors(corsConfig));

// ✅ Conexión base de datos
connectDB();

// ✅ Middleware para parsear JSON
app.use(express.json());

// ✅ Rutas
app.use("/api/tasks", taskRouter);

export default app;
