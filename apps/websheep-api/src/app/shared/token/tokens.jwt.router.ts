import { Router } from 'express';
import { bearerAuthMiddleware } from '../bearer-auth.middleware';
import { createToken } from './create-token';
import { deleteToken } from './delete-token';

export const tokensRouter = Router();

tokensRouter.post('/tokens', createToken());

tokensRouter.delete('/tokens/:tokenId', bearerAuthMiddleware, deleteToken);
