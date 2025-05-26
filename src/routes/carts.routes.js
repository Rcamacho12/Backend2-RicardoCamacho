import { Router } from 'express';
import passport from 'passport';
import { purchaseCart } from '../controllers/purchase.controller.js';
import { authorize } from '../middlewares/roles.js';

const router = Router();

router.post('/:cid/purchase', passport.authenticate('jwt', { session: false }), authorize('user'), purchaseCart);

export default router;
