import { pbkdf2Sync } from 'crypto';
import { Router } from 'express';
import { bearerAuthMiddleware } from '../bearer-auth-middleware';
import { farmersService } from '../farmer/farmers.service';
import { deleteToken } from './delete-token';
import { tokensService } from './tokens.service';

export const tokensRouter = Router();

tokensRouter.post('/tokens', async (req, res) => {
  const userId = req.body.userName;
  const password = req.body.password;

  const farmer = farmersService.getFarmer({ farmerId: userId });

  const passwordHash = pbkdf2Sync(
    password,
    userId,
    1000,
    32,
    'sha512'
  ).toString('base64');

  if (farmer == null || farmer.passwordHash !== passwordHash) {
    res.sendStatus(401);
    return;
  }

  const tokenInfo = await tokensService.create({ userId });

  res.json({
    ...tokenInfo,
    userId
  });
});

tokensRouter.delete('/tokens/:tokenId', bearerAuthMiddleware, deleteToken);
