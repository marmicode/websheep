import { pbkdf2Sync } from 'crypto';
import { Router } from 'express';
import { farmers } from '../../lib/farmers';
import { tokens } from '../../lib/tokens';

export const tokensRouter = Router();

tokensRouter.post('/', async (req, res) => {
  const userId = req.body.userName;
  const password = req.body.password;

  const farmer = farmers.get({ farmerId: userId });

  const passwordHash = pbkdf2Sync(
    password,
    userId,
    1000,
    32,
    'sha512'
  ).toString('base64');

  if (farmer == null || farmer.passwordHash !== passwordHash) {
    res.status(401).end();
    return;
  }

  const tokenInfo = await tokens.create({ userId });

  res.json({
    ...tokenInfo,
    userId
  });
});
