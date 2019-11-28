import * as shortid from 'shortid';
import { database } from '../../database';

export const farmsService = {
  createFarm({ farm }) {
    farm = {
      ...farm,
      id: shortid.generate()
    }
    database
      .get('farms')
      .push(farm)
      .write();
    return farm;
  },
  setFarmFarmers({farmId, farmerIds}) { 
    return database
    .get('farms')
    .find({ id: farmId })
    .assign({
      farmerIds
    })
    .value();
  },
  getFarmsByFarmerId({ farmerId }: { farmerId: string }) {
    return database
      .get('farms')
      .filter(farm => farm.farmerIds.includes(farmerId))
      .value();
  }
};
