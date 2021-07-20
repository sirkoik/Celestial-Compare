import React, { useContext } from "react";
import ObjectContext from "../../../store/ObjectContext";
import classes from "./CompareSide.module.css";
import { commafy, friendlyExponent } from "../../../shared/numbers";

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
      const fieldAttrs = objCtx.fieldAttrsObj[key];
      if (fieldAttrs.ignore) return null;

      const val1 = obj1[key] || 0;
      const val2 = obj2[key] || 0;

      let measure = 0;
      let measureUnits = "%";
      let val1Out = val1;

      switch (fieldAttrs["comparison-method"]) {
        case "subtract":
          measure = val1 - val2;
          measureUnits = fieldAttrs["unit"] || "";
          measure = measure > 0 ? "+" + measure : measure;
          val1Out = val1;
          break;
        case "string":
          measure = val2;
          measureUnits = "";
          val1Out = val1;
          break;
        default:
          const ratio = +val1 / +val2;
          measure = (100 * ratio).toFixed(1);

          if (measure !== Infinity && measure > 100) {
            const ratioFixed =
              ratio < 1000 ? ratio.toFixed(2) : Math.floor(ratio);
            measure = commafy(ratioFixed);
            measureUnits = <>&times;</>;
          }

          if (measure === Infinity) {
            measure = "-";
            measureUnits = "";
          }

          if ((val1 + "").length > 7) {
            val1Out = Number(val1).toExponential();
          } else {
            val1Out = commafy(val1);
          }

          if (val1Out.toString().includes("e")) {
            val1Out = friendlyExponent(val1Out);
          }
          console.log("val1Out", val1Out);
      }

      return (
        <tr key={key}>
          <td>
            <button onClick={objCtx.descHandler.bind(null, key)}>
              {fieldAttrs.name}
            </button>
          </td>
          <td>
            {val1Out} {fieldAttrs.unit}
          </td>
          <td>
            {measure} {measureUnits}
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
