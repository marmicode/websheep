import { randomBytes } from 'crypto';
import * as shortid from 'shortid';
import { promisify } from 'util';
import { database } from '../../database';

export const tokensService = {
  async create({ userId }: { userId: string }) {
    const tokenBuffer = await promisify(randomBytes)(32);
    const tokenValue = tokenBuffer.toString('base64');
    const tokenId = shortid.generate();

    database
      .get('tokens')
      .push({
        id: tokenId,
        token: tokenValue,
        userId
      })
      .write();

    return {
      id: tokenId,
      token: tokenValue
    };
  },
  delete({ tokenId }: { tokenId: string }) {
    database
      .get('tokens')
      .remove({ id: tokenId })
      .write();
  },
  getUserId({ tokenId }: { tokenId: string }) {
    return database
      .get('tokens')
      .find({ id: tokenId })
      .value().userId;
  }
};
