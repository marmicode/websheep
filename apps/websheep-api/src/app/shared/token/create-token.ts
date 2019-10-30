import { authenticate } from './authenticate';
import { TokensService } from './tokens.service';

export const createToken = ({
  tokensService
}: {
  tokensService?: TokensService;
} = {}) => async (req, res) => {
  const userId = req.body.userName;
  const password = req.body.password;

  const tokenInfo = await authenticate({ userId, password, tokensService });

  if (tokenInfo == null) {
    res.sendStatus(401);
    return;
  }

  res.status(201).json({
    ...tokenInfo,
    userId
  });
};
