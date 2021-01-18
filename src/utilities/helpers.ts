export const sortLowToHighFunc = (a: Repository, b: Repository) => {
  if (a.stars < b.stars) {
    return 1;
  }
  if (a.stars > b.stars) {
    return -1;
  }
  return 0;
};

export const sortHighToLowFunc = (a: Repository, b: Repository) => {
  if (a.stars < b.stars) {
    return -1;
  }
  if (a.stars > b.stars) {
    return 1;
  }
  return 0;
};
