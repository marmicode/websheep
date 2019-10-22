import { Router } from 'express';
import { callbackify } from 'util';
import { bearerAuthMiddleware } from '../shared/bearer-auth-middleware';
import { cookieAuthMiddleware } from '../shared/cookie-auth-middleware';
import { deleteToken } from '../shared/token/delete-token';
import { authenticate } from '../shared/token/tokens.router';
import * as cors from 'cors';

export const tokensRouter = Router();

export const anyOrigin = callbackify(async origin => true);

tokensRouter.use(
  cors({
    credentials: true,
    origin: anyOrigin
  })
);

tokensRouter.post(
  '/tokens',

  async (req, res) => {
    const userId = req.body.userName;
    const password = req.body.password;

    const tokenInfo = await authenticate({ userId, password });

    if (tokenInfo == null) {
      res.sendStatus(401);
      return;
    }

    res.cookie('token', tokenInfo.token);

    res.json({
      id: tokenInfo.id,
      userId
    });
  }
);

tokensRouter.delete('/tokens/:tokenId', cookieAuthMiddleware, deleteToken);
