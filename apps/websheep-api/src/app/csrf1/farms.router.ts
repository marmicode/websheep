import { Router } from 'express';
import { getFarmerFarms } from '../shared/farm/ger-farmer-farms';
import { withGuard } from '../shared/with-guard';
import { isSelf } from '../shared/is-self.guard';

export const farmsRouter = Router();

farmsRouter.get('/farmers/:farmerId/farms', withGuard(isSelf), getFarmerFarms);
