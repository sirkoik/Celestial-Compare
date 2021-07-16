export const fieldAttrsObj = {
  id: {
    name: "ID",
    sortOrder: "asc",
  },
  order: {
    name: "Order",
    sortOrder: "asc",
  },
  name: {
    name: "Name",
    fieldType: "string",
    sortOrder: "asc",
  },
  radius: {
    name: "Radius",
    unit: "km",
    sortOrder: "desc",
  },
  surface: {
    name: "Surface area",
    unit: (
      <>
        km<sup>2</sup>
      </>
    ),
    sortOrder: "desc",
  },
  "surface-land": {
    name: "Land surface",
    unit: (
      <>
        km<sup>2</sup>
      </>
    ),
    sortOrder: "desc",
  },
  "surface-water": {
    name: "Surface water",
    unit: (
      <>
        km<sup>2</sup>
      </>
    ),
    sortOrder: "desc",
  },
  volume: {
    name: "Volume",
    unit: (
      <>
        km<sup>3</sup>
      </>
    ),
    sortOrder: "desc",
  },
  mass: {
    name: "Mass",
    unit: "kg",
    sortOrder: "desc",
  },
  density: {
    name: "Density",
    unit: (
      <>
        g / cm<sup>3</sup>
      </>
    ),
    sortOrder: "asc",
  },
  "surface-gravity": {
    name: "Surface gravity",
    unit: (
      <>
        m/s<sup>2</sup>
      </>
    ),
    sortOrder: "asc",
  },
};

export const objectsTemplate = [
  {
    id: 0,
    order: 0,
    name: "Sun",
    radius: 695700,
    surface: 6.09e12,
    "surface-land": 0,
    volume: 1.41e18,
    mass: 1.9885e30,
    density: 1.408,
    "surface-gravity": 274,
  },
  {
    id: 1,
    order: 1,
    name: "Mercury",
    radius: 2439.7,
    surface: 7.48e7,
    "surface-land": 7.48e7,
    volume: 6.083e10,
    mass: 3.3011e23,
    density: 5.427,
  },
  {
    id: 2,
    order: 2,
    name: "Venus",
    radius: 6051.8,
    surface: 4.6023e8,
    "surface-land": 4.6023e8,
    volume: 9.2843e11,
    mass: 4.8675e24,
    density: 5.243,
  },
  {
    id: 3,
    order: 3,
    name: "Earth",
    radius: 6378.137,
    surface: 510067420,
    "surface-land": 148940000,
    "surface-water": 361132000,
    volume: 1.08321e12,
    mass: 5.97237e24,
    density: 5.514,
  },
  {
    id: 4,
    order: 4,
    name: "Mars",
    radius: 3396.2,
    surface: 144798500,
    "surface-land": 144798500,
    volume: 1.6318e11,
    mass: 6.4171e23,
    density: 3.9335,
  },
  {
    id: 5,
    order: 4.5,
    name: "Ceres",
    radius: 469.73,
    surface: 2770000,
    "surface-land": 2770000,
    volume: 434000000,
    mass: 9.3835e20,
    density: 2.162,
  },
  {
    id: 6,
    order: 5,
    name: "Jupiter",
    radius: 69911,
    surface: 6.1419e10,
    "surface-land": 0,
    volume: 1.4313e15,
    mass: 1.8982e27,
    density: 1.326,
  },
  {
    id: 7,
    order: 6,
    name: "Saturn",
    radius: 58232,
    surface: 4.27e10,
    "surface-land": 0,
    volume: 8.2713e14,
    mass: 5.6834e26,
    density: 0.687,
  },
  {
    id: 8,
    order: 7,
    name: "Uranus",
    radius: 25362,
    surface: 8.1156e9,
    "surface-land": 0,
    volume: 6.833e13,
    mass: 8.681e25,
    density: 1.27,
  },
  {
    id: 9,
    order: 8,
    name: "Neptune",
    radius: 24622,
    surface: 7.6183e9,
    "surface-land": 0,
    volume: 6.254e13,
    mass: 1.024e26,
    density: 1.638,
  },
  {
    id: 10,
    order: 9,
    name: "Pluto",
    radius: 1188.3,
    surface: 1.779e7,
    "surface-land": 1.779e7,
    volume: 7.057e9,
    mass: 1.303e22,
    density: 1.854,
  },
];

/*
  {
    id: ,
    order: ,
    name: "",
    radius: ,
    surface: ,
    "surface-land": ,
    volume: ,
    mass: ,
    density: ,
  },
 */
