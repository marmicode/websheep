import { authenticate } from './authenticate';

export async function createTokenAndSetCookie(req, res) {
  const userId = req.body.userName;
  const password = req.body.password;

  const tokenInfo = await authenticate({ userId, password });

  if (tokenInfo == null) {
    res.sendStatus(401);
    return;
  }

  res.cookie('token', tokenInfo.token, {
    secure: true,
    sameSite: 'None'
  });

  res.status(201).json({
    id: tokenInfo.id,
    userId
  });
}
