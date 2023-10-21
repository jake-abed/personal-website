const chooseRandomElement = (list: Array<any>) => {
  return list[Math.floor(Math.random() * list.length)];
};

export { chooseRandomElement };
