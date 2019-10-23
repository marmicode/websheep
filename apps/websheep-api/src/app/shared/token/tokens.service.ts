import { randomBytes } from 'crypto';
import * as shortid from 'shortid';
import { promisify } from 'util';
import { database } from '../../database';

export interface TokenInfo {
  id: string;
  token: string;
}

export async function generateToken(): Promise<TokenInfo> {
  const tokenBuffer = await promisify(randomBytes)(32);

  return {
    id: shortid.generate(),
    token: tokenBuffer.toString('base64')
  };
}

export interface TokensService {
  create(args: { userId: string }): Promise<TokenInfo>;
  delete?(args: { tokenId: string });
  getUserId?(args: { tokenId: string }): string;
}

export const tokensService: TokensService = {
  async create({ userId }: { userId: string }): Promise<TokenInfo> {
    const tokenInfo = await generateToken();

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
