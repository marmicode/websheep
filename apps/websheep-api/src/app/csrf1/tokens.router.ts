import { Router } from 'express';
import { cookieAuthMiddleware } from '../shared/cookie-auth.middleware';
import { deleteToken } from '../shared/token/delete-token';
import { createTokenAndSetCookie } from '../shared/token/create-token-and-set-cookie';

export const tokensRouter = Router();

tokensRouter.post('/tokens', createTokenAndSetCookie);

tokensRouter.delete('/tokens/:tokenId', cookieAuthMiddleware, deleteToken);
