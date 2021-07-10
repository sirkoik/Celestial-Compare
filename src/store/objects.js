export const fieldAttrs = [
  {
    key: 'order',
    name: 'Order',
    sortOrder: 'asc'
  },
  {
    key: 'name',
    name: 'Name',
    fieldType: 'string',
    sortOrder: 'asc'
  },
  {
    key: 'radius',
    name: 'Radius',
    unit: 'km',
    sortOrder: 'desc'
  },
  {
    key: 'surface',
    name: 'Surface area',
    unit: 'sq km',
    sortOrder: 'desc'
  },
  {
    key: 'volume',
    name: 'Volume',
    unit: 'cubic km',
    sortOrder: 'desc'
  },
  {
    key: 'mass',
    name: 'Mass',
    unit: 'kg',
    sortOrder: 'desc'
  }
];

export const objectsTemplate = [
  {
    'order': 1,
    'name': 'Mercury',
    'radius': 2439.7,
    'surface': 7.48e7,
    'volume': 6.083e10,    
    'mass': 3.3011e23
  },
  {
    'order': 2,
    'name': 'Venus',
    'radius': 6051.8,
    'surface': 4.6023e8,
    'volume': 9.2843e11,
    'mass': 4.8675e24
  },
  {
    'order': 3,
    'name': 'Earth',
    'radius': 6378.137,
    'surface': 510067420,
    'surface-land': 148940000,
    'surface-water': 361132000,
    'volume': 1.08321e12,
    'mass': 5.97237e24
  },
  {
    'order': 4,
    'name': 'Mars',
    'radius': 3396.2,
    'surface': 144798500,
    'volume': 1.6318e11,
    'mass': 6.4171e23
  }
];