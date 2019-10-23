import { Router } from 'express';
import { isSelf } from '../shared/is-self.guard';
import { addSheep } from '../shared/sheep/add-sheep';
import { getFarmerSheepList } from '../shared/sheep/get-farmer-sheep-list';
import { withGuard } from '../shared/with-guard.middleware';

export const sheepRouter = Router();

sheepRouter.get(
  '/farmers/:farmerId/sheep',
  withGuard(isSelf),
  getFarmerSheepList
);

sheepRouter.post('/sheep', addSheep);
