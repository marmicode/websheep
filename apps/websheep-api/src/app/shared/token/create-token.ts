import { authenticate } from './authenticate';

export const createToken = () => async (req, res) => {
  const userId = req.body.userName;
  const password = req.body.password;

  const tokenInfo = await authenticate({ userId, password });

  if (tokenInfo == null) {
    res.sendStatus(401);
    return;
  }

  res.json({
    ...tokenInfo,
    userId
  });
};
