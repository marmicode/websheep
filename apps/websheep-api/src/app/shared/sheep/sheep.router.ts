import { Router } from 'express';
import { isSelf } from '../is-self.guard';
import { openApiValidator } from '../openapi/validator';
import { withGuard } from '../with-guard';
import { addSheep } from './add-sheep';
import { getFarmerSheepList } from './get-farmer-sheep-list';

export const sheepRouter = Router();

sheepRouter.get(
  '/farmers/:farmerId/sheep',
  withGuard(isSelf),
  getFarmerSheepList
);

sheepRouter.post(
  '/sheep',
  openApiValidator.validate('post', '/sheep'),
  addSheep
);
