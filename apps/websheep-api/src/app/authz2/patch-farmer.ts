import { farmersService } from '../shared/farmer/farmers.service';
import { serializeFarmer } from './serialize-farmer';

export function patchFarmer(req, res) {
  const farmer = farmersService.updateFarmer({
    farmerId: req.params.farmerId,
    farmer: req.body
  });
  res.json(serializeFarmer(farmer));
}
