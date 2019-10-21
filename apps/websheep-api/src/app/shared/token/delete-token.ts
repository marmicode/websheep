import { tokensService } from './tokens.service';

export const deleteToken = (req, res) => {
  const { tokenId } = req.params;

  const userId = tokensService.getUserId({ tokenId });

  /* User should be owner of the token. */
  if (userId !== req['user'].id) {
    res.sendStatus(403);
    return;
  }

  tokensService.delete({ tokenId });

  res.sendStatus(204);
};
