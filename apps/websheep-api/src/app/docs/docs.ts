import { Router } from 'express';
import * as swaggerUi from 'swagger-ui-express';
import * as yaml from 'yamljs';

export const docsRouter = Router();

const swaggerRaw = require('./websheep.yaml').default;
const swaggerDocument = yaml.parse(swaggerRaw);

docsRouter.use('/docs', swaggerUi.serve);
docsRouter.get('/docs', swaggerUi.setup(swaggerDocument));
docsRouter.get('/docs/specification.yaml', (req, res) => res.send(swaggerRaw));
docsRouter.get('/docs/specification.json', (req, res) =>
  res.send(swaggerDocument)
);
