import AuthService from '../services/auth.service.js';

export const register = async (req, res) => {
    try {
        const result = await AuthService.register(req.body);
        res.status(201).json({ status: 'success', payload: result });
    } catch (error) {
        res.status(400).json({ status: 'error', message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { token, user } = await AuthService.login(req.body);
        res
        .cookie(process.env.COOKIE_NAME, token, { httpOnly: true })
        .status(200)
        .json({ status: 'success', payload: user });
    } catch (error) {
        res.status(401).json({ status: 'error', message: error.message });
    }
};

export const current = async (req, res) => {
    try {
        const userDTO = await AuthService.getCurrentUser(req.user);
        res.status(200).json({ status: 'success', payload: userDTO });
    } catch (error) {
        res.status(400).json({ status: 'error', message: error.message });
    }
};

export const logout = (req, res) => {
    res.clearCookie(process.env.COOKIE_NAME).status(200).json({ status: 'success', message: 'Sesión cerrada' });
};

export const forgotPassword = async (req, res) => {
    try {
        await AuthService.forgotPassword(req.body.email);
        res.status(200).json({ status: 'success', message: 'Correo de recuperación enviado' });
    } catch (error) {
        res.status(400).json({ status: 'error', message: error.message });
    }
};

export const resetPassword = async (req, res) => {
    try {
        await AuthService.resetPassword(req.body.token, req.body.newPassword);
        res.status(200).json({ status: 'success', message: 'Contraseña restablecida' });
    } catch (error) {
        res.status(400).json({ status: 'error', message: error.message });
    }
};
