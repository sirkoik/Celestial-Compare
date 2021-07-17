import React, { useState, useMemo } from "react";
import { fieldAttrsObj, objectsTemplate } from "./objects.js";

const ObjectContext = React.createContext({
  objects: [],
  sortBy: "",
  sorterHandler: () => {},
  sortDirectionHandler: () => {},
  sortDirection: "",
  descHandler: () => {},
  fieldAttr: "",
  fieldAttrsObj: [],
});

export const ObjectContextProvider = (props) => {
  const [sortBy, setSortBy] = useState("order");
  const [sortDirection, setSortDirection] = useState("");

  const sorterHandler = (event) => {
    setSortBy(event.target.value);
  };

  const sortDirectionHandler = (event) => {
    setSortDirection(event.target.value);
  };

  // descHandler: Pops up a description of the field.
  const descHandler = (key) => {
    const { name, description } = fieldAttrsObj[key];

    alert(name + "\n\n" + description);
  };

  // getObj: get a specific object from the array based on id
  const getObj = (id) => {
    const objIndex = objects.findIndex((object) => object.id === +id);

    return objects[objIndex];
  };

  // objects: The sorted objects array.
  // makes use of the useMemo hook, which watches for changes in sortBy and sortDirection.
  // if either of those change, the function returns a copy of the orignal array that is sorted.
  const objects = useMemo(() => {
    // const fieldAttr = getField(sortBy);
    const fieldAttr = fieldAttrsObj[sortBy];

    // set object sort to user sort order. Otherwise, use field default sort order.
    const sortOrderSet =
      sortDirection !== "" ? sortDirection : fieldAttr.sortOrder;

    // use different sort functions depending on ascending / descending or number / string.
    let sortFn = (a, b) => (b[sortBy] || 0) - (a[sortBy] || 0);
    if (sortOrderSet === "asc") {
      sortFn = (a, b) => (a[sortBy] || 0) - (b[sortBy] || 0);
      if (fieldAttr.fieldType === "string")
        sortFn = (a, b) => (a[sortBy] + "").localeCompare(b[sortBy]);
    } else {
      sortFn = (a, b) => b[sortBy] - a[sortBy];
      if (fieldAttr.fieldType === "string")
        sortFn = (a, b) => (b[sortBy] + "").localeCompare(a[sortBy]);
    }

    // sort the objects based on the chosen sortFn.
    return Array.from(objectsTemplate).sort(sortFn);
  }, [sortBy, sortDirection]);

  //const fieldAttr = getField(sortBy);
  const fieldAttr = fieldAttrsObj[sortBy];

  return (
    <ObjectContext.Provider
      value={{
        objects: objects,
        sortBy: sortBy,
        getObj: getObj,
        sorterHandler: sorterHandler,
        sortDirection: sortDirection,
        sortDirectionHandler: sortDirectionHandler,
        descHandler: descHandler,
        fieldAttr: fieldAttr,
        fieldAttrsObj: fieldAttrsObj,
      }}
    >
      {props.children}
    </ObjectContext.Provider>
  );
};

export default ObjectContext;
