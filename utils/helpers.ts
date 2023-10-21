const chooseRandomElement = (list: Array<any>) => {
  return list[Math.random() * list.length];
};

export { chooseRandomElement };
