import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { Router } from 'express';
import { bearerAuthMiddleware } from '../bearer-auth-middleware';

import { docsRouter } from '../docs/docs';
import { farmsRouter } from '../farm/farms.router';
import { sheepRouter } from '../sheep/sheep.router';
import { tokensRouter } from '../token/tokens.router';

export const v1Router = Router();

v1Router.use(cors());
v1Router.use(bodyParser.json());

v1Router.use(docsRouter);
v1Router.use(tokensRouter);
v1Router.use(bearerAuthMiddleware, farmsRouter);
v1Router.use(bearerAuthMiddleware, sheepRouter);
