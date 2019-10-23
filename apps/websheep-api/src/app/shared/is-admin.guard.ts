import { Guard } from './with-guard.middleware';

export const isAdmin: Guard = req => {
  return req['user'].isAdmin === true;
};
