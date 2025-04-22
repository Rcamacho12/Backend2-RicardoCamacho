export const validateRegister = (req, res, next) => {
    const { first_name, last_name, email, age, password } = req.body;
    if (!first_name || !last_name || !email || !age || !password) {
        return res.status(400).json({ error: "Faltan datos requeridos para el registro" });
    }
    next();
};

export const validateLogin = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "Email y password son requeridos" });
    }
    next();
};
