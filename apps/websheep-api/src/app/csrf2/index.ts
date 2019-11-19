import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import { Router } from 'express';
import { environment } from '../../environments/environment';
import { cookieAuthMiddleware } from '../shared/cookie-auth.middleware';
import { docsRouter } from '../shared/docs/docs.router';
import { farmsRouter } from '../shared/farm/farms.router';
import { farmersRouter } from '../shared/farmer/farmers.router';
import { sheepRouter } from '../shared/sheep/sheep.router';
import { tokensCookieRouter } from '../shared/token/tokens.cookie.router';

export const csrf2Router = Router();

/*
 * This is an ugly deprecated shortcut for:
 * router.use(bodyParser.json());
 * router.use(bodyParser.urlencoded({extended: false}));
 */
csrf2Router.use(bodyParser());
csrf2Router.use(cookieParser());

csrf2Router.use(
  cors({
    credentials: true,
    origin: environment.appOrigin
  })
);

csrf2Router.use(docsRouter);
csrf2Router.use(tokensCookieRouter);

csrf2Router.use(cookieAuthMiddleware);

csrf2Router.use(farmersRouter);
csrf2Router.use(farmsRouter);
csrf2Router.use(sheepRouter);
