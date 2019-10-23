import { randomBytes } from 'crypto';
import * as shortid from 'shortid';
import { promisify } from 'util';
import { database } from '../../database';

export interface TokenInfo {
  id: string;
  token: string;
}

export async function defaultTokenFactory(): Promise<TokenInfo> {
  const tokenBuffer = await promisify(randomBytes)(32);

  return {
    id: shortid.generate(),
    token: tokenBuffer.toString('base64')
  };
}

export type TokenFactory = (args?: { userId: string }) => Promise<TokenInfo>;

export const tokensService = {
  async create({
    tokenFactory = defaultTokenFactory,
    userId
  }: {
    tokenFactory: TokenFactory;
    userId: string;
  }): Promise<TokenInfo> {
    const tokenInfo = await tokenFactory();

    database
      .get('tokens')
      .push({
        ...tokenInfo,
        userId
      })
      .write();

    return tokenInfo;
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
