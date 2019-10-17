import { database } from './db';

export const farmers = {
  get({ farmerId }: { farmerId: string }) {
    return database
      .get('farmers')
      .find({ id: farmerId })
      .value();
  }
};
