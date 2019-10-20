import { Router } from 'express';
import { getFarmer } from '../shared/farmer/get-farmer';
import { patchFarmer } from '../shared/farmer/patch-farmer';

export const farmersRouter = Router();

farmersRouter.get('/farmers/:farmerId', getFarmer);
farmersRouter.patch('/farmers/:farmerId', patchFarmer);
