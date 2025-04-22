// src/utils/jwt.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateToken = (user) =>
    jwt.sign(
        { _id: user._id, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    export const verifyToken = (token) => {
    try { return jwt.verify(token, process.env.JWT_SECRET); }
    catch { return null; }
};
