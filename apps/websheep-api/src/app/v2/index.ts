import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { Router } from 'express';
import { bearerAuthMiddleware } from '../bearer-auth-middleware';

import { docsRouter } from '../docs/docs';
import { sheepRouter } from '../sheep/sheep.router';
import { tokensRouter } from '../token/tokens.router';
import { farmsRouter } from './farms.router';

export const v2Router = Router();

v2Router.use(cors());
v2Router.use(bodyParser.json());

v2Router.get('/', (req, res) => res.redirect('/v2/docs'));
v2Router.use(docsRouter);
v2Router.use(tokensRouter);

v2Router.use(bearerAuthMiddleware, farmsRouter);
v2Router.use(bearerAuthMiddleware, sheepRouter);
