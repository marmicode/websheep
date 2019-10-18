import { database } from '../database';

export const farmersService = {
  getFarmer({ farmerId }: { farmerId: string }) {
    return database
      .get('farmers')
      .find({ id: farmerId })
      .value();
  },
  getByToken({ token }: { token: string }) {
    const tokenInfo = database
      .get('tokens')
      .find({ token })
      .value();

    if (tokenInfo == null) {
      return null;
    }

    return this.getFarmer({ farmerId: tokenInfo.userId });
  },
  updateFarmer({ farmerId, farmer }: { farmerId: string; farmer }) {
    return database
      .get('farmers')
      .find({ id: farmerId })
      .assign(farmer)
      .value();
  }
};
