import { OpenApiValidator } from 'express-openapi-validate';
import { Operation } from 'express-openapi-validate/dist/OpenApiDocument';
import { RequestHandler } from 'express-serve-static-core';
import { openApiDocument } from './document';

export const openApiValidator = new OpenApiValidator(openApiDocument);

export const validate = (path?: string): RequestHandler => (req, res, next) => {
  openApiValidator.validate(
    req.method.toLowerCase() as Operation,
    path || req.path
  )(req, res, next);
};
