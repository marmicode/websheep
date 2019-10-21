import { Router } from 'express';
import { getFarmer } from '../shared/farmer/get-farmer';
import { isSelf } from '../shared/is-self.guard';
import { withGuard } from '../shared/with-guard';
import { patchFarmer } from './patch-farmer';

export const farmersRouter = Router();

farmersRouter.get('/farmers/:farmerId', withGuard(isSelf), getFarmer);
farmersRouter.patch('/farmers/:farmerId', withGuard(isSelf), patchFarmer);
