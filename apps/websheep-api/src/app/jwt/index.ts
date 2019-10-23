import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import { Router } from 'express';
import { cookieAuthMiddleware } from '../shared/cookie-auth.middleware';
import { docsRouter } from '../shared/docs/docs.router';
import { farmsRouter } from '../shared/farm/farms.router';
import { farmersRouter } from '../shared/farmer/farmers.router';
import { sheepRouter } from '../shared/sheep/sheep.router';
import { tokensJwtRouter } from '../shared/token/tokens.jwt.router';

export const jwt1Router = Router();

jwt1Router.use(bodyParser.json());
jwt1Router.use(cookieParser());

jwt1Router.use(cors());

jwt1Router.use(docsRouter);
jwt1Router.use(tokensJwtRouter);
jwt1Router.use(cookieAuthMiddleware, farmersRouter);
jwt1Router.use(cookieAuthMiddleware, farmsRouter);
jwt1Router.use(cookieAuthMiddleware, sheepRouter);
