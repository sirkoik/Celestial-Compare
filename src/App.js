// import logo from './logo.svg';
// import './App.css';

import {useState} from 'react';

const fieldAttrs = [
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

const objectsTemplate = [
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

function App() {
  const [objects, setObjects] = useState(objectsTemplate);
  const [sortBy, setSortBy] = useState('order');
  const [sortDirection, setSortDirection] = useState('');

  const objectSorterHandler = (event) => {
    sortObjects(event.target.value);
  }

  const objectSortDirectionHandler = (event) => {
    setSortDirection(event.target.value);
    sortObjects(sortBy);
  }

  // sortObjects: Sort the objects by a field.
  const sortObjects = field => {
    setSortBy(field);
    const fieldAttr = getField(field);

    const sorted = [...objects];

    // set object sort to user sort order. Otherwise, use field default sort order.
    const sortOrderSet = sortDirection !== '' ? sortDirection : fieldAttr.sortOrder;

    // use different sort functions depending on ascending / descending or number / string.
    let sortFn = (a, b) => b[field] - a[field];
    if (sortOrderSet === 'asc') {
      sortFn = (a, b) => a[field] - b[field];
      if (fieldAttr.fieldType === 'string') sortFn = (a, b) => (a[field] + '').localeCompare(b[field]);
    } else {
      sortFn = (a, b) => b[field] - a[field];
      if (fieldAttr.fieldType === 'string') sortFn = (a, b) => (b[field] + '').localeCompare(a[field]);
    }

    // sort the objects based on the chosen sortFn.
    sorted.sort(sortFn);
    
    console.log(field, sorted);
    
    // set the state to the sorted objects.
    setObjects(sorted);
  };

  // getField: Get the field props based on the key name
  const getField = (fieldName) => {
    const index = fieldAttrs.findIndex((field) => field.key === fieldName);
    return fieldAttrs[index];
  }

  const fieldAttr = getField(sortBy);

  return (
    <div className="App">
      <form>
        <select name="obj-sorter" onChange={objectSorterHandler}>
          {fieldAttrs.map(field => <option value={field.key} key={field.key}>{field.name}</option>)}
        </select>
        <select name="obj-sortdirection" onChange={objectSortDirectionHandler}>
          <option value="">-</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </form>
      <p>Objects, sorted by {fieldAttr.name}.</p>
      <ol>
      {
        objects.map((object) => {
          return <li key={object.name}>{object.name}: {object[sortBy]} {fieldAttr.unit} </li>;
        })
      }
      </ol>
    </div>
  );
}

export default App;
