import { Guard } from './with-guard';

export const or = (guards: Guard[]): Guard => req => {
  return guards.some(guard => guard(req));
};
