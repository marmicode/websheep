import * as jwt from 'jsonwebtoken';
import * as shortid from 'shortid';
import { TokenInfo, TokensService } from './tokens.service';

export const tokensJwtService: TokensService = {
  async create({ userId }: { userId: string }): Promise<TokenInfo> {
    const tokenId = shortid.generate();
    return {
      id: tokenId,
      token: jwt.sign(
        {
          aud: 'https://websheep.io',
          iss: 'https://api.websheep.io',
          jti: tokenId,
          sub: userId
        },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      )
    };
  }
};
