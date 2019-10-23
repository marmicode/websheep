import * as shortid from 'shortid';
import * as jwt from 'jsonwebtoken';
import { Router } from 'express';
import { bearerAuthMiddleware } from '../bearer-auth.middleware';
import { createToken } from './create-token';
import { deleteToken } from './delete-token';
import { TokenInfo } from './tokens.service';

export const tokensRouter = Router();

export async function jwtTokenFactory({
  userId
}: {
  userId: string;
}): Promise<TokenInfo> {
  const tokenId = shortid.generate();
  return {
    id: tokenId,
    token: jwt.sign(
      {
        jti: tokenId,
        sub: userId
      },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    )
  };
}

tokensRouter.post(
  '/tokens',
  createToken({
    tokenFactory: jwtTokenFactory
  })
);

tokensRouter.delete('/tokens/:tokenId', bearerAuthMiddleware, deleteToken);
