import * as shortid from 'shortid';
import * as jwt from 'jsonwebtoken';
import { database } from '../database';
import { TokenInfo, TokensService } from '../shared/token/tokens.service';

export const tokensService: TokensService = {
  async create({ userId }: { userId: string }): Promise<TokenInfo> {
    const tokenId = shortid.generate();
    return {
      id: tokenId,
      token: jwt.sign(
        {
          jti: tokenId,
          sub: userId
        },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      )
    };
  },
  delete({ tokenId }: { tokenId: string }) {
    /* @todo add to blacklist */
  },
  getUserId({ tokenId, token }: { tokenId: string; token: string }) {
    return jwt.decode(token);
  }
};
