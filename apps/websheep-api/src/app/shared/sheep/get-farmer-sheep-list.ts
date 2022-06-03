import { farmsService } from '../farm/farms.service';
import { serializeSheep } from './serialize-sheep';
import { sheepService } from './sheep.service';

export function getFarmerSheepList(req, res) {
  const farmList = farmsService.getFarmsByFarmerId({
    farmerId: req.params.farmerId
  });

  const farmIdList = farmList.map(farm => farm.id);

  const sheepList = sheepService
    .getSheepByFarmIdList({ farmIdList })
    .map(sheep => serializeSheep({ sheep, host: req.headers.host }));

  res.json({
    totalCount: sheepList.length,
    items: sheepList
  });
}
