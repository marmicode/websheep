import { Guard } from '../shared/with-guard';

export const isSelf: Guard = req => {
  return req['user'].id === req.params.farmerId;
};
