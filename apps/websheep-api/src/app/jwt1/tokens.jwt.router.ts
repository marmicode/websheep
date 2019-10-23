import { Router } from 'express';
import { bearerAuthMiddleware } from '../shared/bearer-auth.middleware';
import { createToken } from '../shared/token/create-token';
import { deleteToken } from '../shared/token/delete-token';
import { tokensService } from './tokens-service';

export const tokensJwtRouter = Router();

tokensJwtRouter.post(
  '/tokens',
  createToken({
    tokensService
  })
);

tokensJwtRouter.delete('/tokens/:tokenId', bearerAuthMiddleware, deleteToken);
