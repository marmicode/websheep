import { farmersService } from './farmers.service';
import { serializeFarmer } from './serialize-farmer';

export function patchFarmer(req, res) {
  const farmer = farmersService.updateFarmer({
    farmerId: req.params.farmerId,
    farmer: {
      id: req.body.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    }
  });
  res.json(serializeFarmer(farmer));
}
