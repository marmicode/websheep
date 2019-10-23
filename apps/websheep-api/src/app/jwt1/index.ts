import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { Router } from 'express';
import { bearerAuthMiddleware } from '../shared/bearer-auth.middleware';

import { docsRouter } from '../shared/docs/docs.router';
import { farmsRouter } from '../shared/farm/farms.router';
import { farmersRouter } from '../shared/farmer/farmers.router';
import { sheepRouter } from '../shared/sheep/sheep.router';
import { tokensJwtRouter } from './tokens.jwt.router';

export const jwt1Router = Router();

jwt1Router.use(cors());
jwt1Router.use(bodyParser.json());

jwt1Router.use(docsRouter);
jwt1Router.use(tokensJwtRouter);

jwt1Router.use(bearerAuthMiddleware, farmersRouter);
jwt1Router.use(bearerAuthMiddleware, farmsRouter);
jwt1Router.use(bearerAuthMiddleware, sheepRouter);
