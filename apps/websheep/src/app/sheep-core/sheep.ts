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
  id: string;
  kind: SheepKind;
  age: number;
  gender: Gender;
  name: string;
  destinations: Destination[];
  pictureUri: string;
}

export function createSheep(sheep: Partial<Sheep>): Sheep {
  return {
    id: sheep.id,
    kind: sheep.kind,
    age: sheep.age,
    gender: sheep.gender,
    name: sheep.name,
    destinations: sheep.destinations,
    pictureUri: sheep.pictureUri
  };
}
