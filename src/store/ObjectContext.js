import React, { useState, useMemo } from "react";
import { fieldAttrsObj, objectsTemplate } from "./objects.js";

const SORT_DIR_UP = "asc";
const SORT_DIR_DOWN = "desc";

const ObjectContext = React.createContext({
  objects: [],
  objectsTemplate: [],
  sortBy: "",
  sorterHandler: () => {},
  sortDirectionHandler: () => {},
  sortDirection: "",
  descHandler: () => {},
  fieldAttr: "",
  fieldAttrsObj: [],
  SORT_DIR_UP,
  SORT_DIR_DOWN,
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
    const fieldAttr = fieldAttrsObj[sortBy];

    // set object sort to user sort order. Otherwise, use field default sort order.
    const sortOrderSet =
      sortDirection !== "" ? sortDirection : fieldAttr.sortOrder;

    console.log("field attrs", sortDirection, fieldAttrsObj[sortBy].sortOrder);

    // use different sort functions depending on ascending / descending or number / string.
    const sortNumUp = (a, b) => (a[sortBy] || 0) - (b[sortBy] || 0);
    const sortNumDown = (a, b) => (b[sortBy] || 0) - (a[sortBy] || 0);
    const sortStrUp = (a, b) => (a[sortBy] + "").localeCompare(b[sortBy]);
    const sortStrDown = (a, b) => (b[sortBy] + "").localeCompare(a[sortBy]);

    let sortFn = sortNumDown;

    if (sortOrderSet === SORT_DIR_UP) {
      sortFn = fieldAttr.fieldType !== "string" ? sortNumUp : sortStrUp;
    } else if (sortOrderSet === SORT_DIR_DOWN) {
      sortFn = fieldAttr.fieldType !== "string" ? sortNumDown : sortStrDown;
    }

    // sort the objects based on the chosen sortFn.
    return Array.from(objectsTemplate).sort(sortFn);
  }, [sortBy, sortDirection]);

  const fieldAttr = fieldAttrsObj[sortBy];

  return (
    <ObjectContext.Provider
      value={{
        objects,
        objectsTemplate,
        sortBy,
        getObj,
        sorterHandler,
        sortDirection,
        sortDirectionHandler,
        descHandler,
        fieldAttr,
        fieldAttrsObj,
        SORT_DIR_UP,
        SORT_DIR_DOWN,
      }}
    >
      {props.children}
    </ObjectContext.Provider>
  );
};

export default ObjectContext;
