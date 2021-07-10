import React, { useState, useEffect } from 'react';
import { fieldAttrs, objectsTemplate } from './objects.js';

const ObjectContext = React.createContext({
    objects: []
});

export const ObjectContextProvider = props => {
  const [objects, setObjects] = useState(objectsTemplate);
  const [sortBy, setSortBy] = useState('order');
  const [sortDirection, setSortDirection] = useState('');
    
  const sorterHandler = (event) => {
    setSortBy(event.target.value);
  }

  const sortDirectionHandler = (event) => {
    setSortDirection(event.target.value);
  }

  // sortObjects: Sort the objects by a field.
  useEffect(() => {
    const fieldAttr = getField(sortBy);

    const sorted = [...objects];

    // set object sort to user sort order. Otherwise, use field default sort order.
    const sortOrderSet = sortDirection !== '' ? sortDirection : fieldAttr.sortOrder;

    // use different sort functions depending on ascending / descending or number / string.
    let sortFn = (a, b) => b[sortBy] - a[sortBy];
    if (sortOrderSet === 'asc') {
      sortFn = (a, b) => a[sortBy] - b[sortBy];
      if (fieldAttr.fieldType === 'string') sortFn = (a, b) => (a[sortBy] + '').localeCompare(b[sortBy]);
    } else {
      sortFn = (a, b) => b[sortBy] - a[sortBy];
      if (fieldAttr.fieldType === 'string') sortFn = (a, b) => (b[sortBy] + '').localeCompare(a[sortBy]);
    }

    // sort the objects based on the chosen sortFn.
    sorted.sort(sortFn);
    
    console.log(sortBy, sorted);
    
    // set the state to the sorted objects.
    setObjects(sorted);
  }, [sortBy, sortDirection]);

  // getField: Get the field props based on the key name
  const getField = (fieldName) => {
    const index = fieldAttrs.findIndex((field) => field.key === fieldName);
    return fieldAttrs[index];
  }

  const fieldAttr = getField(sortBy);    

    return <ObjectContext.Provider value={{
        objects: objects,
        sortBy: sortBy,
        sorterHandler: sorterHandler,
        sortDirectionHandler: sortDirectionHandler,
        fieldAttr: fieldAttr,
        fieldAttrs: fieldAttrs
    }}>{props.children}</ObjectContext.Provider>;
}

export default ObjectContext;