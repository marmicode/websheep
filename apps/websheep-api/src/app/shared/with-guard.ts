import { Request } from 'express';

export type Guard = (req: Request) => boolean;

export const withGuard = (permission: Guard) => (req, res, next) => {
  return permission(req) ? next() : res.sendStatus(403);
};
