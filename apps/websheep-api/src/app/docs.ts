import { Router } from 'express';
import * as swaggerUi from 'swagger-ui-express';
import * as yaml from 'yamljs';

export const docsRouter = Router();

const swaggerDocument = yaml.parse(require('./websheep.yaml').default);

docsRouter.use('', swaggerUi.serve);
docsRouter.get('', swaggerUi.setup(swaggerDocument));
