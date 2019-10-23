import * as shortid from 'shortid';
import * as jwt from 'jsonwebtoken';
import { Router } from 'express';
import { bearerAuthMiddleware } from '../bearer-auth.middleware';
import { createToken } from './create-token';
import { deleteToken } from './delete-token';
import { TokenInfo, tokensService } from './tokens.service';

export const tokensJwtRouter = Router();

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

tokensJwtRouter.post(
  '/tokens',
  createToken({
    tokensService
  })
);

tokensJwtRouter.delete('/tokens/:tokenId', bearerAuthMiddleware, deleteToken);
