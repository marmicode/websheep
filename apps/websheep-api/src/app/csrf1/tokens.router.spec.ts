import * as bodyParser from 'body-parser';
import * as express from 'express';
import { Express } from 'express';
import * as request from 'supertest';
import { initializeDatabase } from '../database';
import { tokensRouter } from './tokens.router';

describe('tokens router', () => {
  let app: Express;

  beforeEach(() => {
    app = express();

    app.use(bodyParser.json());

    /* Suppose user is authenticated. */
    app.use((req, res, next) => {
      req['user'] = {
        id: 'karinelemarchand'
      };
      next();
    });

    app.use(tokensRouter);

    initializeDatabase();
  });

  it(`should allow farmer to escalate to admin`, async () => {
    const response = await request(app)
      .post('/tokens')
      .send({
        userName: 'karinelemarchand',
        password: '123456'
      });
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        userId: 'karinelemarchand'
      })
    );
    expect(response.headers['access-control-allow-credentials']).toEqual(
      'true'
    );
    expect(response.headers['set-cookie'].length).toEqual(1);
    expect(response.headers['set-cookie'][0]).toMatch(/^token=/);
  });
});
