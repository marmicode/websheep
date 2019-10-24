import * as yaml from 'yamljs';
import { environment } from '../../../environments/environment';

export const openApiRaw = require('./websheep.yaml').default;
export const openApiDocument = {
  ...yaml.parse(openApiRaw),
  servers: [
    {
      description: 'Broken Access Control 1',
      url: '/authz1'
    },
    {
      description: 'Broken Access Control 2',
      url: '/authz2'
    },
    {
      description: 'C.S.R.F. 1',
      url: '/csrf1'
    },
    {
      description: 'C.S.R.F. 2',
      url: '/csrf2'
    },
    {
      description: 'C.S.R.F. 3',
      url: '/csrf3'
    },
    {
      description: 'J.W.T. 1',
      url: '/jwt1'
    },
    {
      description: 'J.W.T. 2',
      url: '/jwt2'
    }
  ].map(server => ({
    ...server,
    url: `${environment.apiServerUrl}${server.url}`
  }))
};
