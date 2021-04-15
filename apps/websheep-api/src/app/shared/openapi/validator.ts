import { RequestHandler } from 'express-serve-static-core';
import { openApiDocument } from './document';
import * as OpenApiValidator from 'express-openapi-validator';

export const validate = (): RequestHandler[] =>
  OpenApiValidator.middleware({
    apiSpec: openApiDocument,
    validateFormats: 'full',
    validateRequests: true,
    validateSecurity: false
  });
