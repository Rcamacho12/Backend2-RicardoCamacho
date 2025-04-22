// src/controllers/session.controller.js
import { hashPassword, comparePassword } from "../utils/bcrypt.js";
import { generateToken } from "../utils/jwt.js";
import { userDao } from "../dao/user.dao.js";

export const register = async (req, res) => {
    try {
        const { first_name, last_name, email, age, password } = req.body;
        const hashed = hashPassword(password);
        const user = await userDao.create({ first_name, last_name, email, age, password: hashed });
        res.status(201).json({ message: "Usuario registrado", user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    };

    export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userDao.getByFilter({ email });
        if (!user || !comparePassword(password, user.password))
        return res.status(401).json({ message: "Credenciales inválidas" });

        const token = generateToken(user);
        res.json({ message: "Login exitoso", token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    };

    export const current = (req, res) => {
    // passport ha cargado req.user
    res.json({ user: req.user });
};
