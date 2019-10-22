import { Router } from 'express';
import { openApiValidator } from '../shared/openapi/validator';
import { getFarmerSheepList } from '../shared/sheep/get-farmer-sheep-list';
import { addSheep } from '../shared/sheep/add-sheep';
import { withGuard } from '../shared/with-guard';
import { isAdmin } from '../shared/is-admin.guard';
import { isSelf } from '../shared/is-self.guard';
import { or } from '../shared/or.guard';

export const sheepRouter = Router();

sheepRouter.get(
  '/farmers/:farmerId/sheep',
  withGuard(or([isAdmin, isSelf])),
  getFarmerSheepList
);

sheepRouter.post(
  '/sheep',
  openApiValidator.validate('post', '/sheep'),
  addSheep
);
