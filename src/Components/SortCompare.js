import React, { useContext } from "react";
import ObjectContext from "../store/ObjectContext";

const SortCompare = () => {
  const objCtx = useContext(ObjectContext);

  const fieldList = objCtx.fieldAttrs.map((field) => (
    <option value={field.key} key={field.key}>
      {field.name}
    </option>
  ));

  const sortedObjects = objCtx.objects.map((object) => {
    return (
      <li key={object.name}>
        {object.name}: {object[objCtx.sortBy] || 0} {objCtx.fieldAttr.unit}
      </li>
    );
  });

  return (
    <div className="SortCompare">
      <form>
        <select name="obj-sorter" onChange={objCtx.sorterHandler}>
          {fieldList}
        </select>
        <select name="obj-sortdirection" onChange={objCtx.sortDirectionHandler}>
          <option value="">-</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </form>
      <p>Objects, sorted by {objCtx.fieldAttr.name}.</p>
      <ol>{sortedObjects}</ol>
    </div>
  );
};

export default SortCompare;
