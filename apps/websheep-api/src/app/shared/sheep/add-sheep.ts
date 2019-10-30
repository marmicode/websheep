import { Response } from 'express';
import { serializeSheep } from './serialize-sheep';
import { sheepService } from './sheep.service';

export function addSheep(req, res: Response) {
  const pictureUri =
    req.body.pictureUri &&
    req.body.pictureUri.replace(/^.*:\/\//, '').replace(req.headers.host, '');

  const sheep = sheepService.createSheep({
    sheep: {
      ...req.body,
      pictureUri
    }
  });

  res.status(201).json(serializeSheep({ sheep, host: req.headers.host }));
}
