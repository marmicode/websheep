import { farmersService } from './farmers.service';

export function getFarmer(req, res) {
  const farmerId = req.user.id;
  res.json(farmersService.getFarmer({ farmerId }));
}
