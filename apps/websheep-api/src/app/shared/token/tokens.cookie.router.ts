import { Router } from 'express';
import { cookieAuthMiddleware } from '../cookie-auth.middleware';
import { deleteToken } from './delete-token';
import { createTokenAndSetCookie } from './create-token-and-set-cookie';

export const tokensCookieRouter = Router();

tokensCookieRouter.post('/tokens', createTokenAndSetCookie);

tokensCookieRouter.delete(
  '/tokens/:tokenId',
  cookieAuthMiddleware,
  deleteToken
);
