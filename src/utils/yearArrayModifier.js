function yearArrayModifyer(data) {
  let object = { year: "mass" };
  data.forEach((asteroid) => {
    if (object[asteroid.year]) {
      object[asteroid.year] = asteroid.mass + object[asteroid.year];
    } else {
      object[asteroid.year] = asteroid.mass;
    }
  });
  return Object.entries(object);
}

export default yearArrayModifyer;
