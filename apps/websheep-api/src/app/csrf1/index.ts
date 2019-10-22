import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import { Router } from 'express';
import { cookieAuthMiddleware } from '../shared/cookie-auth-middleware';

import { docsRouter } from '../shared/docs/docs.router';
import { farmsRouter } from '../shared/farm/farms.router';
import { farmersRouter } from '../shared/farmer/farmers.router';
import { sheepRouter } from '../shared/sheep/sheep.router';
import { anyOrigin } from './any-origin';
import { tokensRouter } from './tokens.router';

export const csrf1Router = Router();

csrf1Router.use(bodyParser.json());
csrf1Router.use(cookieParser());

csrf1Router.use(docsRouter);
csrf1Router.use(tokensRouter);

csrf1Router.use(
  cors({
    credentials: true,
    origin: anyOrigin
  })
);
csrf1Router.use(cookieAuthMiddleware, farmersRouter);
csrf1Router.use(cookieAuthMiddleware, farmsRouter);
csrf1Router.use(cookieAuthMiddleware, sheepRouter);
