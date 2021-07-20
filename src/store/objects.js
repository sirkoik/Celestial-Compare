export const fieldAttrsObj = {
  id: {
    ignore: true,
    name: "ID",
    sortOrder: "asc",
  },
  order: {
    name: "Order",
    description:
      "The order of the object in its system. For instance, Earth is the third object in the solar system.",
    sortOrder: "asc",
    "comparison-method": "subtract",
  },
  type: {
    name: "Type",
    description:
      "The object's type as defined by the International Astronomical Union.",
    fieldType: "string",
    sortOrder: "asc",
    "comparison-method": "string",
  },
  name: {
    name: "Name",
    description:
      "The name of the object. This is defined by the International Astronomical Union.",
    fieldType: "string",
    sortOrder: "asc",
  },
  radius: {
    name: "Radius",
    description:
      "The radius of the object in kilometers. This is half of the object's mean diameter.",
    unit: "km",
    sortOrder: "desc",
  },
  surface: {
    name: "Surface area",
    description:
      "The total surface area of the object in square kilometers. Includes land and water on solid bodies.",
    unit: (
      <>
        km<sup>2</sup>
      </>
    ),
    sortOrder: "desc",
  },
  "surface-land": {
    name: "Land surface",
    description:
      "The amount of non-liquid surface on a solid body in square kilometers.",
    unit: (
      <>
        km<sup>2</sup>
      </>
    ),
    sortOrder: "desc",
  },
  "surface-water": {
    name: "Surface water",
    description:
      "A measure of the total liquid surface (oceans, lakes, etc.) on a solid body such as Earth or Titan in square kilometers.",
    unit: (
      <>
        km<sup>2</sup>
      </>
    ),
    sortOrder: "desc",
  },
  volume: {
    name: "Volume",
    description:
      "Measures how many cubic kilometers of space the object occupies.",
    unit: (
      <>
        km<sup>3</sup>
      </>
    ),
    sortOrder: "desc",
  },
  mass: {
    name: "Mass",
    description:
      'How much matter the object contains (in kilograms). In a gravity well, this is how "heavy" it would be.',
    unit: "kg",
    sortOrder: "desc",
  },
  density: {
    name: "Density",
    description:
      "A measure of how dense the object is, in grams per cubic centimeter.",
    unit: (
      <>
        g/cm<sup>3</sup>
      </>
    ),
    sortOrder: "asc",
  },
  "surface-gravity": {
    name: "Surface gravity",
    description:
      "A measure of how strong the pull of gravity is on the object's surface.",
    unit: (
      <>
        m/s<sup>2</sup>
      </>
    ),
    sortOrder: "asc",
  },
  "temperature-mean": {
    name: "Temperature",
    description: "The mean temperature on the surface of the object.",
    unit: <>&deg;C</>,
    "comparison-method": "subtract",
  },
  "temperature-details": {
    ignore: true, // ignore for now
    name: "Temperatures",
    description:
      "Gives a better idea of the range of temperatures experienced by the object.",
    unit: <>&deg;C</>,
  },
  atmosphere: {
    name: "Atmospheric pressure",
    description: "Atmosphereic pressure on the object's surface.",
    unit: "kPa",
  },
};

export const objectsTemplate = [
  {
    id: 0,
    order: 0,
    name: "Sun",
    type: "Star",
    radius: 695700,
    surface: 6.09e12,
    "surface-land": 0,
    "surface-water": 0,
    volume: 1.41e18,
    mass: 1.9885e30,
    density: 1.408,
    "surface-gravity": 274,
    "temperature-mean": 5498.85,
    "temperature-details": {
      center: 15699730,
      photosphere: 5498.85,
      corona: 4999727,
    },
    atmosphere: 0,
  },
  {
    id: 1,
    order: 1,
    name: "Mercury",
    type: "Planet",
    radius: 2439.7,
    surface: 7.48e7,
    "surface-land": 7.48e7,
    "surface-water": 0,
    volume: 6.083e10,
    mass: 3.3011e23,
    density: 5.427,
    "surface-gravity": 3.7,
    "temperature-mean": 67,
    "temperature-details": {
      min: -173,
      mean: 67,
      max: 427,
    },
    atmosphere: 0,
  },
  {
    id: 2,
    order: 2,
    name: "Venus",
    type: "Planet",
    radius: 6051.8,
    surface: 4.6023e8,
    "surface-land": 4.6023e8,
    "surface-water": 0,
    volume: 9.2843e11,
    mass: 4.8675e24,
    density: 5.243,
    "surface-gravity": 8.87,
    "temperature-mean": 464,
    atmosphere: 9300,
  },
  {
    id: 3,
    order: 3,
    name: "Earth",
    type: "Planet",
    radius: 6378.137,
    surface: 510067420,
    "surface-land": 148940000,
    "surface-water": 361132000,
    volume: 1.08321e12,
    mass: 5.97237e24,
    density: 5.514,
    "surface-gravity": 9.80665,
    "temperature-mean": 14,
    "temperature-details": {
      min: -89.2,
      mean: 14,
      max: 56.7,
    },
    atmosphere: 101.325,
  },
  {
    id: 4,
    order: 4,
    name: "Mars",
    type: "Planet",
    radius: 3396.2,
    surface: 144798500,
    "surface-land": 144798500,
    "surface-water": 0,
    volume: 1.6318e11,
    mass: 6.4171e23,
    density: 3.9335,
    "surface-gravity": 3.72076,
    "temperature-mean": -63,
    "temperature-details": {
      min: -143,
      mean: -63,
      max: 35,
    },
    atmosphere: 0.636,
  },
  {
    id: 5,
    order: 4.5,
    name: "Ceres",
    type: "Dwarf planet",
    radius: 469.73,
    surface: 2770000,
    "surface-land": 2770000,
    "surface-water": 0,
    volume: 434000000,
    mass: 9.3835e20,
    density: 2.162,
    "surface-gravity": 0.28,
    "temperature-mean": -105.15,
    "temperature-details": {
      min: -163.15,
      mean: -105.15,
      max: -38.15,
    },
    atmosphere: 0,
  },
  {
    id: 6,
    order: 5,
    name: "Jupiter",
    type: "Planet",
    radius: 69911,
    surface: 6.1419e10,
    "surface-land": 0,
    "surface-water": 0,
    volume: 1.4313e15,
    mass: 1.8982e27,
    density: 1.326,
    "surface-gravity": 24.79,
    "temperature-mean": -108.15,
    "temperature-details": {
      "min-0.1-bar": -195.15,
      "mean-0.1-bar": -145.15,
      "max-0.1-bar": 726.85,
    },
    atmosphere: 400,
    notes: [
      '"Surface" temperature is measured at 1 bar atmospheric pressure. Jupiter has no real surface.',
      "Atmospheric pressure is measured at the opaque cloud deck.",
    ],
  },
  {
    id: 7,
    order: 6,
    name: "Saturn",
    type: "Planet",
    radius: 58232,
    surface: 4.27e10,
    "surface-land": 0,
    "surface-water": 0,
    volume: 8.2713e14,
    mass: 5.6834e26,
    density: 0.687,
    "surface-gravity": 10.44,
    "temperature-mean": -139.15,
    "temperature-details": {
      "min-0.1-bar": -185.15,
      "mean-0.1-bar": -176.15,
      "max-0.1-bar": -122.15,
    },
    atmosphere: 140,
    notes: [
      '"Surface" temperature is measured at 1 bar atmospheric pressure. Saturn has no real surface.',
    ],
  },
  {
    id: 8,
    order: 7,
    name: "Uranus",
    type: "Planet",
    radius: 25362,
    surface: 8.1156e9,
    "surface-land": 0,
    "surface-water": 0,
    volume: 6.833e13,
    mass: 8.681e25,
    density: 1.27,
    "surface-gravity": 8.69,
    "temperature-mean": -197.2,
    "temperature-details": {
      "min-0.1-bar": -226.15,
      "mean-0.1-bar": -220.15,
      "max-0.1-bar": -216.15,
    },
    atmosphere: 0,
    notes: [
      '"Surface" temperature is measured at 1 bar atmospheric pressure. Uranus has no real surface.',
    ],
  },
  {
    id: 9,
    order: 8,
    name: "Neptune",
    type: "Planet",
    radius: 24622,
    surface: 7.6183e9,
    "surface-land": 0,
    "surface-water": 0,
    volume: 6.254e13,
    mass: 1.024e26,
    density: 1.638,
    "surface-gravity": 11.15,
    "temperature-mean": -201,
    "temperature-details": {
      "mean-0.1-bar": -218,
    },
    atmosphere: 0,
    notes: [
      '"Surface" temperature is measured at 1 bar atmospheric pressure. Neptune has no real surface.',
    ],
  },
  {
    id: 10,
    order: 9,
    name: "Pluto",
    type: "Dwarf planet",
    radius: 1188.3,
    surface: 1.779e7,
    "surface-land": 1.779e7,
    "surface-water": 0,
    volume: 7.057e9,
    mass: 1.303e22,
    density: 1.854,
    "surface-gravity": 0.62,
    "temperature-mean": -229,
    "temperature-details": {
      min: -240.15,
      mean: -229,
      max: -218.15,
    },
    atmosphere: 0.001,
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
    "surface-gravity": ,
  },
 */
