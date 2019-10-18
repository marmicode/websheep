import { farmersService } from './farmers.service';

export function patchFarmer(req, res) {
  const farmer = farmersService.updateFarmer({
    farmerId: req.params.farmerId,
    farmer: req.body
  });
  res.json(farmer);
}
