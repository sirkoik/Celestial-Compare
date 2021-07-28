import React, { useContext } from "react";
import { processNumber } from "../../shared/numbers";
import ObjectContext from "../../store/ObjectContext";
import classes from "./SortCompare.module.css";

const SortCompare = () => {
  const objCtx = useContext(ObjectContext);

  const fieldList = Object.keys(objCtx.fieldAttrsObj).map((key) => {
    const fieldAttrs = objCtx.fieldAttrsObj[key];
    if (key === "id" || fieldAttrs.ignore) {
      return null;
    }

    return (
      <option value={key} key={key}>
        {fieldAttrs.name}
      </option>
    );
  });

  const compareMethod = objCtx.fieldAttr["comparison-method"];

  let max = 0;
  if (compareMethod === "ratio") {
    // get sort direction either based on user selection or default.
    const sortDir = objCtx.sortDirection
      ? objCtx.sortDirection
      : objCtx.fieldAttrsObj[objCtx.sortBy].sortOrder;

    // max: get the biggest value of the list.
    max =
      sortDir === objCtx.SORT_DIR_DOWN
        ? objCtx.objects[0][objCtx.sortBy]
        : objCtx.objects[objCtx.objects.length - 1][objCtx.sortBy];
  }

  const sortedObjects = objCtx.objects.map((object) => {
    const objVal = object[objCtx.sortBy];
    const objValOut = isNaN(objVal) ? objVal : processNumber(objVal);

    // create background bar with ratios.
    let backgroundBar = {};
    if (compareMethod === "ratio") {
      const percent = (100 * objVal) / max;
      backgroundBar = {
        backgroundImage: `linear-gradient(90deg, #2d5458 ${percent}%, transparent ${percent}%)`,
      };
    }

    return (
      <tr key={object.name}>
        {/* <td>
          <input type="checkbox" name={`compare-${object.id}`} />
        </td> */}
        <td>{object.name}</td>
        <td style={backgroundBar}>
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
      <form>
        <div className="select">
          <label htmlFor="obj-sorter">Property</label>
          <select
            name="obj-sorter"
            id="obj-sorter"
            onChange={objCtx.sorterHandler}
            value={objCtx.sortBy}
          >
            {fieldList}
          </select>
        </div>
        <div className="select">
          <label htmlFor="obj-sortdirection">Sort direction</label>
          <select
            name="obj-sortdirection"
            id="obj-sortdirection"
            onChange={objCtx.sortDirectionHandler}
          >
            <option value="">-</option>
            <option value={objCtx.SORT_DIR_UP}>Up</option>
            <option value={objCtx.SORT_DIR_DOWN}>Down</option>
          </select>
        </div>
        {/* Compare: {compareMethod} {max} {objCtx.sortDirection} */}
      </form>
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
            <td>
              {friendlyName}{" "}
              <button onClick={objCtx.descHandler.bind(null, objCtx.sortBy)}>
                ?
              </button>
            </td>
          </tr>
        </thead>
        <tbody>{sortedObjects}</tbody>
      </table>
    </div>
  );
};

export default SortCompare;
