import { Router } from 'express';
import { docsRouter } from '../shared/docs';

export const v1Router = Router();

v1Router.get('/', (req, res) => res.redirect('/v1/docs'));
v1Router.use('/docs', docsRouter);
