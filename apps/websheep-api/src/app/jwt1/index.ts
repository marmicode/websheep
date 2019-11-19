import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { Router } from 'express';

import { docsRouter } from '../shared/docs/docs.router';
import { farmsRouter } from '../shared/farm/farms.router';
import { farmersRouter } from '../shared/farmer/farmers.router';
import { sheepRouter } from '../shared/sheep/sheep.router';
import { tokensJwtRouter } from '../shared/token/tokens.jwt.router';
import { jwtAuthMiddleware } from './jwt-auth.middleware';
import { jsonOnly } from '../shared/json-only.middleware';

export const jwt1Router = Router();

jwt1Router.use(cors());
jwt1Router.use(jsonOnly());
jwt1Router.use(bodyParser.json());

jwt1Router.use(docsRouter);
jwt1Router.use(tokensJwtRouter);

jwt1Router.use(jwtAuthMiddleware);
jwt1Router.use(farmersRouter);
jwt1Router.use(farmsRouter);
jwt1Router.use(sheepRouter);
