function classArrayModifyer(data) {
  let object = { recclass: "count" };
  data.forEach((asteroid) => {
    if (object[asteroid.recclass]) {
      object[asteroid.recclass]++;
    } else {
      object[asteroid.recclass] = 1;
    }
  });
  return Object.entries(object);
}

export default classArrayModifyer;
