import yearArrayModifyer from "./yearArrayModifier";
const data = [
  {
    __id: "row-hzx5-myxf_ktcf",
    name: "Aachen",
    id: "1",
    nametype: "Valid",
    recclass: "L5",
    mass: 21,
    fall: "Fell",
    year: "1880-01-01T00:00:00Z",
    reclat: "50.775000",
    reclong: "6.083330",
    geolocation: {
      type: "Point",
      coordinates: [6.08333, 50.775],
    },
    geolocation_address: null,
    geolocation_city: null,
    geolocation_state: null,
    geolocation_zip: null,
  },
  {
    __id: "row-rcr3.5w34_59cn",
    name: "Aarhus",
    id: "2",
    nametype: "Valid",
    recclass: "H6",
    mass: 720,
    fall: "Fell",
    year: "1951-01-01T00:00:00Z",
    reclat: "56.183330",
    reclong: "10.233330",
    geolocation: {
      type: "Point",
      coordinates: [10.23333, 56.18333],
    },
    geolocation_address: null,
    geolocation_city: null,
    geolocation_state: null,
    geolocation_zip: null,
  },
  {
    __id: "row-gffa_citp-4gu8",
    name: "Abee",
    id: "6",
    nametype: "Valid",
    recclass: "EH4",
    mass: 107000,
    fall: "Fell",
    year: "1952-01-01T00:00:00Z",
    reclat: "54.216670",
    reclong: "-113.000000",
    geolocation: {
      type: "Point",
      coordinates: [-113.0, 54.21667],
    },
    geolocation_address: null,
    geolocation_city: null,
    geolocation_state: null,
    geolocation_zip: null,
  },
  {
    __id: "row-hzx5-myxf_ktcf",
    name: "Aachen",
    id: "1",
    nametype: "Valid",
    recclass: "L5",
    mass: 50,
    fall: "Fell",
    year: "1880-01-01T00:00:00Z",
    reclat: "50.775000",
    reclong: "6.083330",
    geolocation: {
      type: "Point",
      coordinates: [6.08333, 50.775],
    },
    geolocation_address: null,
    geolocation_city: null,
    geolocation_state: null,
    geolocation_zip: null,
  }
];

describe("Create Class Pie Chart Object", () => {
  test("should return an array of arrays", () => {
    expect(yearArrayModifyer(data)).toEqual([["year", "mass"]]);
  });
});
