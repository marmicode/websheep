export function serializeFarmer(farmer) {
  const serializedFarmer = {
    ...farmer
  };
  delete serializedFarmer.passwordHash;
  return serializedFarmer;
}
