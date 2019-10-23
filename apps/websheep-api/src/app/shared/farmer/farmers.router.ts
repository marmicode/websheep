import { Router } from 'express';
import { getFarmer } from './get-farmer';
import { patchFarmer } from './patch-farmer';
import { withGuard } from '../with-guard.middleware';
import { isSelf } from '../is-self.guard';

export const farmersRouter = Router();

farmersRouter.get('/farmers/:farmerId', withGuard(isSelf), getFarmer);
farmersRouter.patch('/farmers/:farmerId', withGuard(isSelf), patchFarmer);
