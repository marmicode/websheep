import * as express from 'express';
import { Express } from 'express';
import * as jp from 'jsonpath';
import * as request from 'supertest';
import { authz1Router } from '.';
import { interactions } from '../../../../../libs/pacts/websheep-websheepapi.json';
import { resetDatabase } from './../database';
import { farmsService } from './../shared/farm/farms.service';
import { farmersService } from './../shared/farmer/farmers.service';
import { sheepService } from './../shared/sheep/sheep.service';

describe('websheep api contract testing', () => {
  let app: Express;
  let stateProviders = {
    'farmer A has sheep': () => {
      jest.spyOn(farmsService, 'getFarmsByFarmerId').mockReturnValue([
        {
          id: 'FARM_ID',
          name: 'FARM_NAME'
        }
      ]);
      sheepService.createSheep({ sheep: { name: 'Dolly', farmId: 'FARM_ID' } });
      sheepService.createSheep({ sheep: { name: 'Bruce', farmId: 'FARM_ID' } });
    }
  };

  beforeEach(() => {
    app = express();
    app.use(authz1Router);

    resetDatabase();

    /* Mock token authentication. */
    jest.spyOn(farmersService, 'getByToken').mockImplementation(({ token }) => {
      return token === 'VALID_TOKEN' ? { id: 'FARMER_A' } : null;
    });
  });

  it.each(
    interactions.map(interaction => [
      interaction.description,
      interaction.providerState || 'no state',
      interaction
    ])
  )('should check %s given %s', async (description, state, interaction) => {
    expect(Object.keys(stateProviders)).toContain(state);

    await stateProviders[state]();

    const res = await request(app)
      [interaction.request.method.toLowerCase()](interaction.request.path)
      .set(interaction.request.headers);

    /* Use simple object type for jsonpath to work. */
    const response = {
      body: res.body,
      status: res.status,
      headers: res.headers
    };

    expect(response.headers).toEqual(
      expect.objectContaining(interaction.response.headers)
    );

    jp.nodes(interaction.response.body, '$..*')
      /* Ignore objects and keep leaves. */
      .filter(({ value }) => typeof value !== 'object')
      .forEach(({ path, value }) => {
        /* Add `body` level. */
        path = ['$', 'body', ...path.slice(1)];

        const pathStr = path.join('.').replace(/\.(\d+)/g, '[$1]');
        const matchingRule = interaction.response.matchingRules[pathStr];

        switch (matchingRule ? matchingRule.match : null) {
          case 'type':
            expect({
              /* Add path for logs. */
              path: pathStr,
              value: typeof jp.query(response, pathStr)[0]
            }).toEqual({ path: pathStr, value: typeof value });
            break;
          case 'regex':
              expect({
                /* Add path for logs. */
                path: pathStr,
                value: value.match(matchingRule.regex) != null
              }).toEqual({ path: pathStr, value: true });
            break;
          default:
            expect({
              /* Add path for logs. */
              path: pathStr,
              value: jp.query(response, pathStr)[0]
            }).toEqual({ path: pathStr, value });
        }
      });
  });
});
