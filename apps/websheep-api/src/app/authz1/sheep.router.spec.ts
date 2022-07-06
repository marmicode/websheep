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
  it(`should not allow reading other farmers sheep`, async () => {
    const { client, givenUser } = setUp();
    givenUser('karinelemarchand');
    const { status } = await client.get('/farmers/foobar/sheep');
    expect(status).toBe(403);
  });

  it(`should allow to reading own sheep`, async () => {
    const { client, givenUser } = setUp();
    givenUser('karinelemarchand');
    const response = await client.get('/farmers/karinelemarchand/sheep');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        items: expect.arrayContaining([
          expect.objectContaining({ name: 'Irma' })
        ])
      })
    );
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
