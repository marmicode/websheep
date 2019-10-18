import * as shortid from 'shortid';
import { database } from '../../lib/database';

export const sheepService = {
  getSheepByFarmIdList({ farmIdList }: { farmIdList: string[] }) {
    return database
      .get('sheep')
      .filter(_sheep => farmIdList.includes(_sheep.farmId))
      .value();
  },
  createSheep({ sheep }) {
    database
      .get('sheep')
      .push({
        age: sheep.age,
        eyeColor: sheep.eyeColor,
        gender: sheep.gender,
        name: sheep.name,
        pictureUri: sheep.pictureUri,
        farmId: sheep.farm.id,
        destinations: sheep.destinations
      })
      .write();
    return sheep;
  }
};
