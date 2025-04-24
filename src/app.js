// src/app.js
import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import passport from "./passport.js";

import viewsRouter from "./routes/views.router.js";
import sessionsRouter from "./routes/sessions.router.js";

dotenv.config();
const app = express();
connectDB();

// Handlebars
app.engine("handlebars", engine({
    defaultLayout: "main",
    layoutsDir: path.join(process.cwd(), "src/views/layouts"),
}));
app.set("view engine", "handlebars");
app.set("views", path.join(process.cwd(), "src/views"));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

// Rutas
app.use("/", viewsRouter);
app.use("/api/sessions", sessionsRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server en http://localhost:${PORT}`));
