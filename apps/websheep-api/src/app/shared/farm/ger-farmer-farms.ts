import { farmsService } from './farms.service';

export function getFarmerFarms(req, res) {
  const { farmerId } = req.params;

  const farms = farmsService.getFarmsByFarmerId({ farmerId });

  res.json({
    previous: null,
    next: null,
    totalCount: farms.length,
    items: farms
  });
}
