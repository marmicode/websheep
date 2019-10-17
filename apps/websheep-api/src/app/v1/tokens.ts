import { pbkdf2Sync } from 'crypto';
import { Router } from 'express';
import { farmers } from '../../lib/farmers';

export const tokensRouter = Router();

tokensRouter.post('/', (req, res) => {
  const farmerId = req.body.userName;
  const password = req.body.password;

  const farmer = farmers.get({ farmerId });

  const passwordHash = pbkdf2Sync(
    password,
    farmerId,
    1000,
    32,
    'sha512'
  ).toString('base64');

  if (farmer == null || farmer.passwordHash !== passwordHash) {
    res.status(401).end();
    return;
  }

  res.json({
    userId: farmerId
  });
});
