import { Router } from 'express';
import { farmsService } from '../shared/farms.service';

export const farmsRouter = Router();

farmsRouter.get('/farmers/:farmerId/farms', (req, res) => {
  const { farmerId } = req.params;

  const farms = farmsService.getFarmsByFarmerId({ farmerId });

  res.json({
    previous: null,
    next: null,
    totalCount: farms.length,
    items: farms
  });
});
