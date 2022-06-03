import { openApiDocument } from './../shared/openapi/document';
import * as express from 'express';
// Import this plugin
import jestOpenAPI from 'jest-openapi';
import { join } from 'path';
import * as request from 'supertest';
import { resetDatabase } from '../database';
import { sheepRouter } from './sheep.router';

jestOpenAPI({
  ...openApiDocument,
  /* Remove servers otherwise the test crashes because we are using a random server port. */
  servers: []
});

describe('sheep router', () => {
  it(`should get farmer's sheep without authorization`, async () => {
    const { client, givenUser } = setUp();

    givenUser('karinelemarchand');

    const response = await client.get('/farmers/foobar/sheep');

    expect(response.status).toEqual(200);
    expect(response.body.totalCount).toEqual(13);
    expect(response.body.items[0].name).toEqual('Adriana');
    expect(response).toSatisfyApiSpec();
  });

  function setUp() {
    let _userId: string;

    const app = express();

    app.use((req, res, next) => {
      req['user'] = _userId ? { id: _userId } : null;
      next();
    });
    app.use(sheepRouter);

    resetDatabase();

    return {
      client: request(app),
      givenUser(userId: string) {
        _userId = userId;
      }
    };
  }
});
