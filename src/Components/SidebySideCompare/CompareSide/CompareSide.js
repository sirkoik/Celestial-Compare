import React, { useContext } from "react";
import ObjectContext from "../../../store/ObjectContext";
import classes from "./CompareSide.module.css";

const CompareSide = (props) => {
  const objCtx = useContext(ObjectContext);

  const output = () => {
    const obj1 = objCtx.getObj(props.id1);
    const obj2 = objCtx.getObj(props.id2);
    // console.log(obj1, obj2);

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    const keys = keys1 <= keys2 ? keys1 : keys2;

    return keys.map((key) => {
      if (key === "id" || key === "name") return null;

      const val1 = obj1[key] || 0;
      const val2 = obj2[key] || 0;

      const ratio = +val1 / +val2;
      let ratioRounded = (100 * ratio).toFixed(1);
      let ratioUnits = "%";
      if (ratioRounded > 100) {
        ratioRounded = ratio.toFixed(2);
        ratioUnits = "times";
      }

      const fieldAttrs = objCtx.fieldAttrsObj[key];

      return (
        <tr key={key}>
          <td>{fieldAttrs.name}</td>
          <td>
            {val1} {fieldAttrs.unit}
          </td>
          <td>
            {ratioRounded} {ratioUnits}
          </td>
        </tr>
      );
    });
  };

  return (
    <table className={classes.CompareTable}>
      <thead>
        <tr>
          <td>-</td>
          <td>Value</td>
          <td>vs. {objCtx.getObj(props.id2)["name"]}</td>
        </tr>
      </thead>
      <tbody>{output()}</tbody>
    </table>
  );
};

export default CompareSide;
