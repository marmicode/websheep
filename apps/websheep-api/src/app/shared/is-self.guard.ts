import { Guard } from './with-guard.middleware';

export const isSelf: Guard = req => {
  return req['user'].id === req.params.farmerId;
};
