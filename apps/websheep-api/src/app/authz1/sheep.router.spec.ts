import { Express } from 'express';
import * as request from 'supertest';
import * as express from 'express';
import { resetDatabase } from '../database';
import { sheepRouter } from './sheep.router';

describe('sheep router', () => {
  let app: Express;

  beforeEach(() => {
    app = express();
    app.use(sheepRouter);
    resetDatabase();
  });

  it(`should get farmer's sheep without authorization`, async () => {
    const { body } = await request(app).get('/farmers/foobar/sheep');
    expect(body.totalCount).toEqual(13);
    expect(body.items[0].name).toEqual('Adriana');
  });
});
