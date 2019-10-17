import { Router } from 'express';
import { farmers } from '../../lib/farmers';

export const tokensRouter = Router();

tokensRouter.post('/', (req, res) => {
  const farmer = farmers.get({ farmerId: req.body.userName });

  if (farmer == null || farmer.password !== req.body.password) {
    return res.status(403);
  }

  res.json({});
});
