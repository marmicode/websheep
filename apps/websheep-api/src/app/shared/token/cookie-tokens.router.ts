import { Router } from 'express';
import { cookieAuthMiddleware } from '../cookie-auth.middleware';
import { deleteToken } from './delete-token';
import { createTokenAndSetCookie } from './create-token-and-set-cookie';

export const cookieTokensRouter = Router();

cookieTokensRouter.post('/tokens', createTokenAndSetCookie);

cookieTokensRouter.delete(
  '/tokens/:tokenId',
  cookieAuthMiddleware,
  deleteToken
);
