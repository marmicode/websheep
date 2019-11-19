import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import { Router } from 'express';
import { cookieAuthMiddleware } from '../shared/cookie-auth.middleware';

import { docsRouter } from '../shared/docs/docs.router';
import { farmsRouter } from '../shared/farm/farms.router';
import { farmersRouter } from '../shared/farmer/farmers.router';
import { sheepRouter } from '../shared/sheep/sheep.router';
import { anyOrigin } from '../shared/helpers/any-origin';
import { tokensCookieRouter } from '../shared/token/tokens.cookie.router';
import { jsonOnly } from '../shared/json-only.middleware';

export const csrf1Router = Router();

csrf1Router.use(jsonOnly());
csrf1Router.use(bodyParser.json());
csrf1Router.use(cookieParser());

csrf1Router.use(
  cors({
    credentials: true,
    origin: anyOrigin
  })
);

csrf1Router.use(docsRouter);
csrf1Router.use(tokensCookieRouter);

csrf1Router.use(cookieAuthMiddleware);

csrf1Router.use(farmersRouter);
csrf1Router.use(farmsRouter);
csrf1Router.use(sheepRouter);
