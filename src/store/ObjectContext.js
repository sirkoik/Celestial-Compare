import React, { useState, useMemo } from 'react';
import { fieldAttrs, objectsTemplate } from './objects.js';

const ObjectContext = React.createContext({
  objects: [],
  sortBy: '',
  sorterHandler: () => { },
  sortDirectionHandler: () => { },
  fieldAttr: '',
  fieldAttrs: []
});

export const ObjectContextProvider = props => {
  const [sortBy, setSortBy] = useState('order');
  const [sortDirection, setSortDirection] = useState('');
    
  const sorterHandler = (event) => {
    setSortBy(event.target.value);
  }

  const sortDirectionHandler = (event) => {
    setSortDirection(event.target.value);
  }

  // getField: Get the field props based on the key name
  const getField = (fieldName) => {
    const index = fieldAttrs.findIndex((field) => field.key === fieldName);
    return fieldAttrs[index];
  }  

  // objects: The sorted objects array.
  // makes use of the useMemo hook, which watches for changes in sortBy and sortDirection.
  // if either of those change, the function returns a copy of the orignal array that is sorted.
  const objects = useMemo(() => {
    const fieldAttr = getField(sortBy);

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
    return Array.from(objectsTemplate).sort(sortFn);
  }, [sortBy, sortDirection]);

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