import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { Router } from 'express';
import { bearerAuthMiddleware } from '../shared/bearer-auth-middleware';

import { docsRouter } from '../shared/docs/docs.router';
import { farmersRouter } from './farmers.router';
import { farmsRouter } from './farms.router';
import { sheepRouter } from './sheep.router';
import { tokensRouter } from '../shared/token/tokens.router';

export const authz1Router = Router();

authz1Router.use(cors());
authz1Router.use(bodyParser.json());

authz1Router.use(docsRouter);
authz1Router.use(tokensRouter);

authz1Router.use(bearerAuthMiddleware, farmersRouter);
authz1Router.use(bearerAuthMiddleware, farmsRouter);
authz1Router.use(bearerAuthMiddleware, sheepRouter);
