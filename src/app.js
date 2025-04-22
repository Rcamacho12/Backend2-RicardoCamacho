import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import passport from "./passport.js";

import { logger }        from "./middlewares/logger.middleware.js";
import { errorHandler }  from "./middlewares/error.middleware.js";
import sessionsRouter    from "./routes/sessions.router.js";

dotenv.config();
const app = express();
connectDB();

app.use(logger);
app.use(express.json());

app.use(passport.initialize());
app.use("/api/sessions", sessionsRouter);

app.use(errorHandler);                        // captura errores de controladores
app.use((req, res) => {                       // 404 handler
    res.status(404).json({ error: "Ruta no encontrada" });
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`🚀 Server en http://localhost:${PORT}`));
