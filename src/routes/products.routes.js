import { Router } from 'express';
import passport from 'passport';
import ProductService from '../services/product.service.js';
import { authorize } from '../middlewares/roles.js';

const router = Router();

router.post('/', passport.authenticate('jwt', { session: false }), authorize('admin'), async (req, res) => {
  try {
    const product = await ProductService.create(req.body);
    res.status(201).json({ status: 'success', payload: product });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
});

router.put('/:pid', passport.authenticate('jwt', { session: false }), authorize('admin'), async (req, res) => {
  try {
    const product = await ProductService.update(req.params.pid, req.body);
    res.status(200).json({ status: 'success', payload: product });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
});

router.delete('/:pid', passport.authenticate('jwt', { session: false }), authorize('admin'), async (req, res) => {
  try {
    await ProductService.delete(req.params.pid);
    res.status(200).json({ status: 'success', message: 'Producto eliminado' });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
});

export default router;
