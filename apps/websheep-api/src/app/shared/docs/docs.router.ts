import { Router } from 'express';
import * as swaggerUi from 'swagger-ui-express';
import { openApiDocument, openApiRaw } from '../openapi/document';

export const docsRouter = Router();

docsRouter.get('/', (req, res) => res.redirect(`${req.baseUrl}/docs`));
docsRouter.use('/docs', swaggerUi.serve);
docsRouter.get('/docs', swaggerUi.setup(openApiDocument));
docsRouter.get('/docs/specification.yaml', (req, res) => res.send(openApiRaw));
docsRouter.get('/docs/specification.json', (req, res) =>
  res.send(openApiDocument)
);
