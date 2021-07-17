import React, { useContext } from "react";
import { commafy } from "../shared/numbers";
import ObjectContext from "../store/ObjectContext";

const SortCompare = () => {
  const objCtx = useContext(ObjectContext);

  const fieldList = Object.keys(objCtx.fieldAttrsObj).map((key) => {
    if (key === "id") return null;

    return (
      <option value={key} key={key}>
        {objCtx.fieldAttrsObj[key].name}
      </option>
    );
  });

  const sortedObjects = objCtx.objects.map((object) => {
    const objVal = object[objCtx.sortBy];
    const objValOut = isNaN(objVal) ? objVal : commafy(objVal);

    return (
      <tr key={object.name}>
        <td>{object.name}</td>
        <td>
          {objValOut || 0} {objCtx.fieldAttr.unit}
        </td>
      </tr>
    );
  });

  // const sortDirection = objCtx.sortDirection || objCtx.fieldAttr.sortOrder;
  // const sortDirectionText =
  // sortDirection === "asc" ? "ascending" : "descending";

  const sortSelects = (
    <>
      <select name="obj-sorter" onChange={objCtx.sorterHandler}>
        {fieldList}
      </select>
      <select name="obj-sortdirection" onChange={objCtx.sortDirectionHandler}>
        <option value="">-</option>
        <option value="asc">Up</option>
        <option value="desc">Down</option>
      </select>
    </>
  );

  return (
    <div className="SortCompare">
      <h1>Rank objects by one variable</h1>
      {/* <p>
        Objects, sorted by {objCtx.fieldAttr.name}, {sortDirectionText}.
      </p> */}
      <table>
        <thead>
          <tr>
            <td>Object</td>
            <td>{sortSelects}</td>
          </tr>
        </thead>
        <tbody>{sortedObjects}</tbody>
      </table>
    </div>
  );
};

export default SortCompare;
