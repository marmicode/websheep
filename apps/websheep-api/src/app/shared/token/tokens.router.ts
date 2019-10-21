import { pbkdf2Sync } from 'crypto';
import { Router } from 'express';
import { bearerAuthMiddleware } from '../bearer-auth-middleware';
import { farmersService } from '../farmer/farmers.service';
import { deleteToken } from './delete-token';
import { TokenInfo, tokensService } from './tokens.service';

export const tokensRouter = Router();

export async function authenticate({
  userId,
  password
}: {
  userId: string;
  password: string;
}): Promise<TokenInfo> {
  const farmer = farmersService.getFarmer({ farmerId: userId });

  const passwordHash = pbkdf2Sync(
    password,
    userId,
    1000,
    32,
    'sha512'
  ).toString('base64');

  if (farmer == null || farmer.passwordHash !== passwordHash) {
    return null;
  }

  return tokensService.create({ userId });
}

tokensRouter.post('/tokens', async (req, res) => {
  const userId = req.body.userName;
  const password = req.body.password;

  const tokenInfo = await authenticate({ userId, password });

  if (tokenInfo == null) {
    res.sendStatus(401);
    return;
  }

  res.json({
    ...tokenInfo,
    userId
  });
});

tokensRouter.delete('/tokens/:tokenId', bearerAuthMiddleware, deleteToken);
