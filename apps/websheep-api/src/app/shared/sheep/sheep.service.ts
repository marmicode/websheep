import * as shortid from 'shortid';
import { database } from '../../database';

export const sheepService = {
  getSheepByFarmIdList({ farmIdList }: { farmIdList: string[] }) {
    return database
      .get('sheep')
      .filter(_sheep => farmIdList.includes(_sheep.farmId))
      .value();
  },
  createSheep({ sheep }) {
    sheep = {
      id: shortid.generate(),
      createdAt: new Date().toISOString(),
      ...sheep
    };

    database
      .get('sheep')
      .push({
        id: sheep.id,
        createdAt: sheep.createdAt,
        age: sheep.age,
        eyeColor: sheep.eyeColor,
        gender: sheep.gender,
        name: sheep.name,
        pictureUri: sheep.pictureUri,
        farmId: sheep.farm && sheep.farm.id,
        destinations: sheep.destinations
      })
      .write();

    return sheep;
  }
};
