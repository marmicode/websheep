import { Router } from 'express';
import { getFarmerFarms } from './ger-farmer-farms';

export const farmsRouter = Router();

farmsRouter.get('/farmers/:farmerId/farms', getFarmerFarms);
