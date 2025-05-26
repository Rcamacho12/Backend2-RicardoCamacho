import PurchaseService from '../services/purchase.service.js';

export const purchaseCart = async (req, res) => {
    try {
        const result = await PurchaseService.purchase(req.params.cid, req.user.email);
        res.status(200).json({ status: 'success', payload: result });
    } catch (error) {
        res.status(400).json({ status: 'error', message: error.message });
    }
};
