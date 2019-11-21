import { Pact } from '@pact-foundation/pact';

export const _projectRootPath = `${__dirname}/../../../../`;

export const provider = new Pact({
  consumer: 'WebSheep',
  provider: 'WebSheepApi',
  cors: true,
  pactfileWriteMode: 'update',
  log: `${_projectRootPath}/dist/pact-logs`,
  dir: `${_projectRootPath}/libs/pacts`
});
