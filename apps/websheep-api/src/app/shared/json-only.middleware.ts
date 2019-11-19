
export const jsonOnly = () => (req, res, next) => {
  if (['PATCH','POST','PUT'].includes(req.method) && req.header('Content-Type') !== 'application/json') {
    res.sendStatus(415);
    return;
  }
  next();
};