import { authenticate } from './authenticate';
import { TokenFactory } from './tokens.service';

export const createToken = ({
  tokenFactory
}: { tokenFactory?: TokenFactory } = {}) => async (req, res) => {
  const userId = req.body.userName;
  const password = req.body.password;

  const tokenInfo = await authenticate({ userId, password, tokenFactory });

  if (tokenInfo == null) {
    res.sendStatus(401);
    return;
  }

  res.json({
    ...tokenInfo,
    userId
  });
};
