import { randomBytes } from 'crypto';
import * as shortid from 'shortid';
import { promisify } from 'util';
import { database } from './database';

export const tokens = {
  async create({ userId }: { userId: string }) {
    const tokenBuffer = await promisify(randomBytes)(32);
    const tokenValue = tokenBuffer.toString('base64');
    const tokenId = shortid.generate();

    database.get('tokens').create({
      id: tokenId,
      token: tokenValue,
      userId
    });

    return {
      id: tokenId,
      token: tokenValue
    };
  }
};
