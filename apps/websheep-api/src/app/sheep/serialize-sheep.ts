export function serializeSheep({ sheep, host }) {
  const pictureUri = sheep.pictureUri && `//${host}${sheep.pictureUri}`;
  return {
    ...sheep,
    pictureUri
  };
}
