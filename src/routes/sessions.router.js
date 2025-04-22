// src/routes/sessions.router.js
import express from "express";
import passport from "../passport.js";
import { register, login, current } from "../controllers/session.controller.js";
import { validateRegister, validateLogin } from "../middlewares/validation.middleware.js";

const router = express.Router();

router.post("/register", validateRegister, register);
router.post("/login",    validateLogin,    login);
router.get(
    "/current",
    passport.authenticate("jwt", { session: false }),
    current
);

export default router;
