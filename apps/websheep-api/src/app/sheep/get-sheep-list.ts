import { serializeSheep } from './serialize-sheep';
import { sheepService } from './sheep.service';

export function getSheepList(req, res) {
  const pictureUri =
    req.body.pictureUri &&
    req.body.pictureUri.replace(/^.*:\/\//, '').replace(req.headers.host, '');

  const sheep = sheepService.createSheep({
    sheep: {
      ...req.body,
      pictureUri
    }
  });

  res.json(serializeSheep({ sheep, host: req.headers.host }));
}
