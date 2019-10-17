import { Router } from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { docsRouter } from '../shared/docs';
import { tokensRouter } from './tokens';

export const v1Router = Router();

v1Router.use(cors());
v1Router.use(bodyParser.json());

v1Router.get('/', (req, res) => res.redirect('/v1/docs'));
v1Router.use('/docs', docsRouter);
v1Router.use('/tokens', tokensRouter);