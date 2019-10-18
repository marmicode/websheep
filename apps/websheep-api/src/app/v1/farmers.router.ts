import { Router } from 'express';
import { getFarmer } from '../farmer/get-farmer';
import { patchFarmer } from '../farmer/patch-farmer';

export const farmersRouter = Router();

farmersRouter.get('/farmers/:farmerId', getFarmer);
farmersRouter.patch('/farmers/:farmerId', patchFarmer);
