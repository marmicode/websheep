import { Guard } from './with-guard';

export const isAdmin: Guard = req => {
  return req['user'].isAdmin === true;
};
