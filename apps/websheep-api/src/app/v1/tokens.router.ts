import { pbkdf2Sync } from 'crypto';
import { Router } from 'express';
import { farmersService } from '../shared/farmers.service';
import { tokensService } from '../shared/tokens.service';

export const tokensRouter = Router();

tokensRouter.post('/tokens', async (req, res) => {
  const userId = req.body.userName;
  const password = req.body.password;

  const farmer = farmersService.get({ farmerId: userId });

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

  const tokenInfo = await tokensService.create({ userId });

  res.json({
    ...tokenInfo,
    userId
  });
});

tokensRouter.delete('/tokens/:tokenId', (req, res) => {
  const { tokenId } = req.params;

  tokensService.delete({ tokenId });

  res.status(204).end();
});
