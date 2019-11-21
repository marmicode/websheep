import * as bodyParser from 'body-parser';
import * as express from 'express';
import { Express } from 'express';
import * as request from 'supertest';
import { resetDatabase } from '../database';
import { csrf1Router } from './index';

describe('tokens router', () => {
  let app: Express;

  beforeEach(() => {
    app = express();

    app.use(csrf1Router);

    resetDatabase();
  });

  it(`should allow cross origin requests for any origin`, async () => {
    const response = await request(app)
      .post('/tokens')
      .send({
        userName: 'karinelemarchand',
        password: '123456'
      });
    expect(response.status).toEqual(201);
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
