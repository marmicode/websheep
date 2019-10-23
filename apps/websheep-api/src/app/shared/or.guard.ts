import { Guard } from './with-guard.middleware';

export const or = (guards: Guard[]): Guard => req => {
  return guards.some(guard => guard(req));
};
