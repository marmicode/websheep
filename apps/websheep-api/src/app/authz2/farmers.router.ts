import { Router } from 'express';
import { isSelf } from '../shared/is-self.guard';
import { validate } from '../shared/openapi/validator';
import { withGuard } from '../shared/with-guard.middleware';
import { getFarmer } from './get-farmer';
import { patchFarmer } from './patch-farmer';

export const farmersRouter = Router();

farmersRouter.get('/farmers/:farmerId', withGuard(isSelf), getFarmer);
farmersRouter.patch('/farmers/:farmerId', withGuard(isSelf), patchFarmer);
