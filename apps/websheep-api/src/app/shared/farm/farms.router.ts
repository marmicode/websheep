import { Router } from 'express';
import { getFarmerFarms } from './ger-farmer-farms';
import { withGuard } from '../with-guard';
import { isSelf } from '../is-self.guard';

export const farmsRouter = Router();

farmsRouter.get('/farmers/:farmerId/farms', withGuard(isSelf), getFarmerFarms);
