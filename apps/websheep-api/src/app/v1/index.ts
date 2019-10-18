import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { Router } from 'express';
import { bearerAuthMiddleware } from '../shared/bearer-auth-middleware';

import { docsRouter } from '../shared/docs';
import { farmsRouter } from './farms.router';
import { sheepRouter } from './sheep.router';
import { tokensRouter } from './tokens.router';

export const v1Router = Router();

v1Router.use(cors());
v1Router.use(bodyParser.json());

v1Router.get('/', (req, res) => res.redirect('/v1/docs'));
v1Router.use(docsRouter);
v1Router.use(tokensRouter);

v1Router.use(bearerAuthMiddleware, farmsRouter);
v1Router.use(bearerAuthMiddleware, sheepRouter);
