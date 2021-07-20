import React, { useContext } from "react";
import { friendlyExponent, processNumber } from "../../shared/numbers";
import ObjectContext from "../../store/ObjectContext";
import classes from "./SortCompare.module.css";

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
    const objValOut = isNaN(objVal) ? objVal : processNumber(objVal);

    return (
      <tr key={object.name}>
        {/* <td>
          <input type="checkbox" name={`compare-${object.id}`} />
        </td> */}
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
      <p>
        By&nbsp;
        <select name="obj-sorter" onChange={objCtx.sorterHandler}>
          {fieldList}
        </select>
        <select name="obj-sortdirection" onChange={objCtx.sortDirectionHandler}>
          <option value="">-</option>
          <option value="asc">Up</option>
          <option value="desc">Down</option>
        </select>
        <button onClick={objCtx.descHandler.bind(null, objCtx.sortBy)}>
          ?
        </button>
      </p>
    </>
  );

  const friendlyName = objCtx.fieldAttrsObj[objCtx.sortBy].name;

  return (
    <div className={classes.SortCompare}>
      <h1>Rank sorter</h1>
      <p>
        Sort celestial objects by a physical property such as mass or
        atmospheric pressure. Choose the second drop-down to sort up or down.
      </p>
      {/* <p>
        Objects, sorted by {objCtx.fieldAttr.name}, {sortDirectionText}.
      </p> */}
      {sortSelects}
      <table>
        <thead>
          <tr>
            {/* <td>-</td> */}
            <td>Object</td>
            <td>{friendlyName}</td>
          </tr>
        </thead>
        <tbody>{sortedObjects}</tbody>
      </table>
    </div>
  );
};

export default SortCompare;
