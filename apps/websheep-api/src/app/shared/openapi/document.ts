import * as yaml from 'yamljs';
export const openApiRaw = require('./websheep.yaml').default;
export const openApiDocument = yaml.parse(openApiRaw);
