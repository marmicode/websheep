import { Router } from 'express';
import { getFarmerSheepList } from '../sheep/get-farmer-sheep-list';
import { getSheepList } from '../sheep/get-sheep-list';

export const sheepRouter = Router();

sheepRouter.get('/farmers/:farmerId/sheep', getFarmerSheepList);

sheepRouter.post('/sheep', getSheepList);
