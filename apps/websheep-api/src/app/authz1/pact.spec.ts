import * as express from 'express';
import { Express } from 'express';
import { authz1Router } from '.';
import { interactions } from '../../../../../libs/pacts/websheep-websheepapi.json';
import { resetDatabase } from './../database';
import { farmsService } from './../shared/farm/farms.service';
import { farmersService } from './../shared/farmer/farmers.service';
import { sheepService } from './../shared/sheep/sheep.service';
import { testPactInteraction } from '../../testing/test-pact-interaction';

describe('websheep api contract testing', () => {
  let app: Express;
  let farmGreenId: string;
  let stateProviders = {
    'user is farmer Foo': () => {
      /* Mock token authentication. */
      jest
        .spyOn(farmersService, 'getByToken')
        .mockImplementation(() => {
          return { id: 'FARMER_FOO' };
        });
    },
    'farm Green exists': () => {
      farmGreenId = farmsService.createFarm({farm: {name: 'Green'}}).id;
    },
    'farm Green has a sheep named Dolly': () => {
      sheepService.createSheep({ sheep: {name: 'Dolly', farmId: farmGreenId}});
    },
    'farm Green has a sheep named Bruce': () => {
      sheepService.createSheep({ sheep: {name: 'Bruce', farmId: farmGreenId}});
    },
    'farmer Foo is farm Green owner': () => {
      farmsService.setFarmFarmers({farmId: farmGreenId, farmerIds: ['FARMER_FOO']})
    }
  };

  beforeEach(() => {
    app = express();
    app.use(authz1Router);

    resetDatabase();
  });

  it.each(
    interactions.map(interaction => [
      interaction.description,
      interaction.providerState || 'no state',
      interaction
    ])
  )('should check %s given %s', async (description, states, interaction) => {
    for (const state of states.split(',')) {
      expect(Object.keys(stateProviders)).toContain(state);
      await stateProviders[state]();
    }

    await testPactInteraction({ app, interaction });
  });
});
