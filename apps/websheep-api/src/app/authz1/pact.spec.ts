import * as express from 'express';
import { Express } from 'express';
import { authz1Router } from '.';
import { interactions } from '../../../../../libs/pacts/websheep-websheepapi.json';
import { resetDatabase } from './../database';
import { farmsService } from './../shared/farm/farms.service';
import { farmersService } from './../shared/farmer/farmers.service';
import { sheepService } from './../shared/sheep/sheep.service';
import { testPactInteraction } from '../shared/test-pact-interaction';

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

    await testPactInteraction({ app, interaction });
  });
});
