export const sheepRouteHelper = {
  BASE_PATH: 'sheep',
  SHEEP_ADD_PATH: 'add',
  SHEEP_LIST_PATH: 'list',

  sheepListRoute() {
    return [this.BASE_PATH, this.SHEEP_LIST_PATH];
  },
  sheepAddRoute() {
    return [this.BASE_PATH, this.SHEEP_ADD_PATH];
  }
};
