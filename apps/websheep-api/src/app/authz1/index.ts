import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { Router } from 'express';
import { bearerAuthMiddleware } from '../shared/bearer-auth.middleware';

import { docsRouter } from '../shared/docs/docs.router';
import { farmsRouter } from '../shared/farm/farms.router';
import { farmersRouter } from '../shared/farmer/farmers.router';
import { sheepRouter } from './sheep.router';
import { tokensRouter } from '../shared/token/tokens.router';
import { jsonOnly } from '../shared/json-only.middleware';

export const authz1Router = Router();

authz1Router.use(cors());
authz1Router.use(jsonOnly());
authz1Router.use(bodyParser.json());

authz1Router.use(docsRouter);
authz1Router.use(tokensRouter);

authz1Router.use(bearerAuthMiddleware);

authz1Router.use(farmersRouter);
authz1Router.use(farmsRouter);
authz1Router.use(sheepRouter);
