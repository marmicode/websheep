import { Router } from 'express';
import { getFarmerSheepList } from '../shared/sheep/get-farmer-sheep-list';
import { getSheepList } from '../shared/sheep/get-sheep-list';

export const sheepRouter = Router();

sheepRouter.get('/farmers/:farmerId/sheep', getFarmerSheepList);

sheepRouter.post('/sheep', getSheepList);
