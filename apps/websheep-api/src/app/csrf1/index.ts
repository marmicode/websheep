import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { Router } from 'express';
import { bearerAuthMiddleware } from '../shared/bearer-auth-middleware';

import { docsRouter } from '../shared/docs/docs.router';
import { farmsRouter } from '../shared/farm/farms.router';
import { sheepRouter } from '../shared/sheep/sheep.router';
import { farmersRouter } from '../shared/farmer/farmers.router';
import { tokensRouter } from './tokens.router';

export const csrf1Router = Router();

csrf1Router.use(bodyParser.json());

csrf1Router.use(docsRouter);
csrf1Router.use(tokensRouter);

csrf1Router.use(cors());
csrf1Router.use(bearerAuthMiddleware, farmersRouter);
csrf1Router.use(bearerAuthMiddleware, farmsRouter);
csrf1Router.use(bearerAuthMiddleware, sheepRouter);
