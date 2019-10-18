import { Router } from 'express';
import { farms } from '../../lib/farms';
import { sheep } from '../../lib/sheep';

export const sheepRouter = Router();

sheepRouter.get('/farmers/:farmerId/sheep', (req, res) => {
  const farmList = farms.getFarmsByFarmerId({ farmerId: req.params.farmerId });

  const farmIdList = farmList.map(farm => farm.id);

  const sheepList = sheep.getSheepByFarmIdList({ farmIdList }).map(_sheep => ({
    id: _sheep.id,
    age: _sheep.age,
    eyeColor: _sheep.eyeColor,
    gender: _sheep.gender,
    name: _sheep.name,
    pictureUri: `//${req.headers.host}${_sheep.pictureUri}`,
    farm: {
      id: _sheep.farmId
    },
    destinations: _sheep.destinations
  }));

  res.json({
    next: null,
    previous: null,
    totalCount: sheepList.length,
    items: sheepList
  });
});
