import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { Router } from 'express';
import { bearerAuthMiddleware } from '../shared/bearer-auth-middleware';

import { docsRouter } from '../shared/docs/docs.router';
import { farmsRouter } from '../shared/farm/farms.router';
import { sheepRouter } from '../shared/sheep/sheep.router';
import { tokensRouter } from '../shared/token/tokens.router';
import { farmersRouter } from '../shared/farmer/farmers.router';

export const authz2Router = Router();

authz2Router.use(cors());
authz2Router.use(bodyParser.json());

authz2Router.use(docsRouter);
authz2Router.use(tokensRouter);

authz2Router.use(bearerAuthMiddleware, farmersRouter);
authz2Router.use(bearerAuthMiddleware, farmsRouter);
authz2Router.use(bearerAuthMiddleware, sheepRouter);
