import { Router } from 'express';
import * as swaggerUi from 'swagger-ui-express';
import * as yaml from 'yamljs';

export const docsRouter = Router();

const swaggerRaw = require('./websheep.yaml').default;
const swaggerDocument = yaml.parse(swaggerRaw);

docsRouter.use('', swaggerUi.serve);
docsRouter.get(
  '',
  swaggerUi.setup(swaggerDocument, {
    swaggerOptions: {
      urls: [
        {
          name: 'YAML Specification',
          url: '/docs/specification.yaml'
        },
        {
          name: 'JSON Specification',
          url: '/docs/specification.json'
        }
      ]
    }
  })
);
docsRouter.get('/specification.yaml', (req, res) => res.send(swaggerRaw));
docsRouter.get('/specification.json', (req, res) => res.send(swaggerDocument));
