import React, { useContext } from "react";
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
    return (
      <li key={object.name}>
        {object.name}: {object[objCtx.sortBy] || 0} {objCtx.fieldAttr.unit}
      </li>
    );
  });

  const sortDirection = objCtx.sortDirection || objCtx.fieldAttr.sortOrder;
  const sortDirectionText =
    sortDirection === "asc" ? "ascending" : "descending";

  return (
    <div className="SortCompare">
      <form>
        <div class="select">
          <label for="obj-sorter">Object</label>
          <select name="obj-sorter" onChange={objCtx.sorterHandler}>
            {fieldList}
          </select>
        </div>
        <div class="select">
          <label for="obj-sortdirection">Direction</label>
          <select
            name="obj-sortdirection"
            onChange={objCtx.sortDirectionHandler}
          >
            <option value="">Default</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </form>
      <p>
        Objects, sorted by {objCtx.fieldAttr.name}, {sortDirectionText}
        {}.
      </p>
      <ol>{sortedObjects}</ol>
    </div>
  );
};

export default SortCompare;
