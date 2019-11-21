import * as bodyParser from 'body-parser';
import { Express } from 'express';
import * as request from 'supertest';
import * as express from 'express';
import { resetDatabase } from '../database';
import { farmersRouter } from './farmers.router';

describe('farmers router', () => {
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

    app.use(farmersRouter);

    resetDatabase();
  });

  it(`should allow farmer to escalate to admin`, async () => {
    /* Escalate to isAdmin. */
    const patchResult = await request(app)
      .patch('/farmers/karinelemarchand')
      .send({
        isAdmin: true
      });
    expect(patchResult.status).toEqual(200);

    /* Make sure isAdmin is now true. */
    const getResult = await request(app).get('/farmers/karinelemarchand');
    expect(getResult.status).toEqual(200);
    expect(getResult.body).toEqual(
      expect.objectContaining({
        isAdmin: true
      })
    );
  });
});
