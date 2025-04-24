// src/routes/views.router.js
import express from "express";
import passport from "../passport.js";

const router = express.Router();

// Formulario de login
router.get("/login", (req, res) => {
    res.render("login");
});

// Formulario de registro
router.get("/register", (req, res) => {
    res.render("register");
});

// Perfil protegido (ejemplo)
// Asegúrate de que aquí tengas el usuario en req.user (p.ej. tras logueo)
router.get("/profile",
    passport.authenticate("jwt", { session: false, failureRedirect: "/login" }),
    (req, res) => {
        res.render("profile", { user: req.user });
    }
);

export default router;
