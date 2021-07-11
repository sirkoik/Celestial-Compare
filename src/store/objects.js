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
    unit: "sq km",
    sortOrder: "desc",
  },
  "surface-land": {
    name: "Land surface",
    unit: "sq km",
    sortOrder: "desc",
  },
  "surface-water": {
    name: "Water surface",
    unit: "sq km",
    sortOrder: "desc",
  },
  volume: {
    name: "Volume",
    unit: "cubic km",
    sortOrder: "desc",
  },
  mass: {
    name: "Mass",
    unit: "kg",
    sortOrder: "desc",
  },
};

export const objectsTemplate = [
  {
    id: 0,
    order: 1,
    name: "Mercury",
    radius: 2439.7,
    surface: 7.48e7,
    "surface-land": 7.48e7,
    volume: 6.083e10,
    mass: 3.3011e23,
  },
  {
    id: 1,
    order: 2,
    name: "Venus",
    radius: 6051.8,
    surface: 4.6023e8,
    "surface-land": 4.6023e8,
    volume: 9.2843e11,
    mass: 4.8675e24,
  },
  {
    id: 2,
    order: 3,
    name: "Earth",
    radius: 6378.137,
    surface: 510067420,
    "surface-land": 148940000,
    "surface-water": 361132000,
    volume: 1.08321e12,
    mass: 5.97237e24,
  },
  {
    id: 3,
    order: 4,
    name: "Mars",
    radius: 3396.2,
    surface: 144798500,
    "surface-land": 144798500,
    volume: 1.6318e11,
    mass: 6.4171e23,
  },
];
