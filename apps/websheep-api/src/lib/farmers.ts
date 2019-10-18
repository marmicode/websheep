import { database } from './database';

export const farmers = {
  get({ farmerId }: { farmerId: string }) {
    return database
      .get('farmers')
      .find({ id: farmerId })
      .value();
  }
};
