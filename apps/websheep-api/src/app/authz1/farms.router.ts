import { Router } from 'express';
import { getFarmerFarms } from '../shared/farm/ger-farmer-farms';

export const farmsRouter = Router();

farmsRouter.get('/farmers/:farmerId/farms', getFarmerFarms);
