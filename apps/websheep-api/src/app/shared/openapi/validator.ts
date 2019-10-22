import { OpenApiValidator } from 'express-openapi-validate';
import { openApiDocument } from './document';

export const openApiValidator = new OpenApiValidator(openApiDocument);
