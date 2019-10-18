export enum SheepKind {
  Sheep = 'sheep'
}

export enum Destination {
  Kebab = 'kebab',
  Wool = 'wool'
}

export enum Gender {
  Female = 'female',
  Male = 'male'
}

export interface Sheep {
  createdAt: Date;
  id: string;
  kind: SheepKind;
  age: number;
  eyeColor: string;
  gender: Gender;
  name: string;
  destinations: Destination[];
  pictureUri: string;
}

export function createSheep(sheep: Partial<Sheep>): Sheep {
  return {
    id: sheep.id,
    createdAt: sheep.createdAt && new Date(sheep.createdAt),
    kind: sheep.kind,
    age: sheep.age,
    eyeColor: sheep.eyeColor,
    gender: sheep.gender,
    name: sheep.name,
    destinations: sheep.destinations,
    pictureUri: sheep.pictureUri
  };
}
