import { Router } from 'express';
import { validate } from '../shared/openapi/validator';
import { addSheep } from '../shared/sheep/add-sheep';
import { getFarmerSheepList } from '../shared/sheep/get-farmer-sheep-list';

export const sheepRouter = Router();

sheepRouter.get('/farmers/:farmerId/sheep', getFarmerSheepList);

sheepRouter.post('/sheep', validate(), addSheep);
