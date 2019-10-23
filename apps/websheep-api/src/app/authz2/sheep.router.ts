import { Router } from 'express';
import { isAdmin } from '../shared/is-admin.guard';
import { isSelf } from '../shared/is-self.guard';
import { validate } from '../shared/openapi/validator';
import { or } from '../shared/or.guard';
import { addSheep } from '../shared/sheep/add-sheep';
import { getFarmerSheepList } from '../shared/sheep/get-farmer-sheep-list';
import { withGuard } from '../shared/with-guard.middleware';

export const sheepRouter = Router();

sheepRouter.get(
  '/farmers/:farmerId/sheep',
  withGuard(or([isAdmin, isSelf])),
  getFarmerSheepList
);

sheepRouter.post('/sheep', validate(), addSheep);
