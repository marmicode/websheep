import { database } from './database';

export const farms = {
  getFarmsByFarmerId({ farmerId }: { farmerId: string }) {
    return database
      .get('farms')
      .filter(farm => farm.farmerIds.includes(farmerId))
      .value();
  }
};
