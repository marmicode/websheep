export function isSelfGuard(req, res, next) {
  if (req.user.id !== req.params.farmerId) {
    res.sendStatus(403);
    return;
  }

  return next();
}
