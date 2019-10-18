import { database } from '../../lib/database';

export const sheepService = {
  getSheepByFarmIdList({ farmIdList }: { farmIdList: string[] }) {
    return database
      .get('sheep')
      .filter(_sheep => farmIdList.includes(_sheep.farmId))
      .value();
  },
  createSheep({ sheep }) {
    return database.get('sheep').insert(sheep);
  }
};
