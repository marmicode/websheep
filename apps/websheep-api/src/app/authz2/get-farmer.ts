import { farmersService } from './farmers.service';
import { serializeFarmer } from './serialize-farmer';

export function getFarmer(req, res) {
  const farmerId = req.user.id;
  res.json(serializeFarmer(farmersService.getFarmer({ farmerId })));
}
