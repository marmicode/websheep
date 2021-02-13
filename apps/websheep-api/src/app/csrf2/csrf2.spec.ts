import * as express from 'express';
import { Express } from 'express';
import * as request from 'supertest';
import { resetDatabase } from '../database';
import { farmersService } from '../shared/farmer/farmers.service';
import { csrf2Router } from './index';

describe('tokens router', () => {
  let app: Express;

  beforeEach(() => {
    app = express();

    farmersService.getByToken = jest.fn().mockReturnValue({
      id: 'USER_ID'
    });

    app.use(csrf2Router);

    resetDatabase();
  });

  it(`should allow x-www-form-urlencoded`, async () => {
    const response = await request(app)
      .post('/sheep')
      .set('Cookie', ['token=TOKEN_VALUE'])
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send('name=Dolly&farm[id]=FARM_ID');

    expect(response.status).toEqual(201);

    expect(response.body).toEqual(
      expect.objectContaining({
        name: 'Dolly'
      })
    );

    /* ACAO header should be set to default allowed origin. */
    expect(response.headers['access-control-allow-origin']).toEqual(
      'http://localhost:4200'
    );

    /* @todo Validate schema at the end cuz openApiValidator seems to mutate the response. */
  });
});
