import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { Router } from 'express';

import { docsRouter } from '../shared/docs/docs.router';
import { farmsRouter } from '../shared/farm/farms.router';
import { farmersRouter } from '../shared/farmer/farmers.router';
import { jwtAuthMiddleware } from '../shared/jwt-auth.middleware';
import { sheepRouter } from '../shared/sheep/sheep.router';
import { tokensJwtRouter } from '../shared/token/tokens.jwt.router';

export const jwt2Router = Router();

jwt2Router.use(cors());
jwt2Router.use(bodyParser.json());

jwt2Router.use(docsRouter);
jwt2Router.use(tokensJwtRouter);

jwt2Router.use(jwtAuthMiddleware, farmersRouter);
jwt2Router.use(jwtAuthMiddleware, farmsRouter);
jwt2Router.use(jwtAuthMiddleware, sheepRouter);

/* Error handler. */
jwt2Router.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    errors: [
      {
        name: err.name,
        message: err.message,
        data: err.data
      }
    ],
    env: process.env
  });
});
