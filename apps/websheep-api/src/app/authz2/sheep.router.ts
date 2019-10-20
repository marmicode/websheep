import { Router } from 'express';
import { getFarmerSheepList } from '../shared/sheep/get-farmer-sheep-list';
import { getSheepList } from '../shared/sheep/get-sheep-list';
import { isSelfGuard } from './is-self.guard';

export const sheepRouter = Router();

sheepRouter.get('/farmers/:farmerId/sheep', isSelfGuard, getFarmerSheepList);

sheepRouter.post('/sheep', getSheepList);
