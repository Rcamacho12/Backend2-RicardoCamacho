// src/routes/sessions.router.js
import { Router } from 'express';
import passport from 'passport';
import {
  register,
  login,
  current,
  logout,
  forgotPassword,
  resetPassword
} from '../controllers/auth.controller.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/current', passport.authenticate('jwt', { session: false }), current);
router.post('/logout', logout);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

export default router;
