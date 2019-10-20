import { Router } from 'express';
import { getFarmer } from '../shared/farmer/get-farmer';
import { patchFarmer } from '../shared/farmer/patch-farmer';
import { withGuard } from '../shared/with-guard';
import { isSelf } from '../shared/is-self.guard';

export const farmersRouter = Router();

farmersRouter.get('/farmers/:farmerId', withGuard(isSelf), getFarmer);
farmersRouter.patch('/farmers/:farmerId', withGuard(isSelf), patchFarmer);
