import { Router } from 'express';
import { isSelfGuard } from '../v2/is-self.guard';
import { getFarmerSheepList } from './get-farmer-sheep-list';
import { getSheepList } from './get-sheep-list';

export const sheepRouter = Router();

sheepRouter.get('/farmers/:farmerId/sheep', isSelfGuard, getFarmerSheepList);

sheepRouter.post('/sheep', getSheepList);
