import React, { useContext } from "react";
import ObjectContext from "../../../store/ObjectContext";
import classes from "./CompareSide.module.css";
import { commafy, friendlyExponent } from "../../../shared/numbers";

const CompareSide = (props) => {
  const objCtx = useContext(ObjectContext);

  const list = [];

  const output = () => {
    const obj1 = objCtx.getObj(props.id1);
    const obj2 = objCtx.getObj(props.id2);
    // console.log(obj1, obj2);

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    // make the total keys equivalent to the greatest number of keys.
    const keys = keys1 <= keys2 ? keys1 : keys2;

    return keys.map((key) => {
      if (key === "id" || key === "name") return null;
      const fieldAttrs = objCtx.fieldAttrsObj[key];
      // console.log("key test", key, fieldAttrs);
      if (!fieldAttrs) return null;

      if (fieldAttrs.ignore) return null;

      const val1 = obj1[key] || 0;
      const val2 = obj2[key] || 0;

      let measure = 0;
      let measureUnits = "%";
      let val1Out = val1;
      let val2Out = val2;

      switch (fieldAttrs["comparison-method"]) {
        case "subtract":
          measure = val1 - val2;

          const measurePlaces =
            String(measure).length - String(measure).indexOf(".");
          if (measurePlaces > 2) measure = measure.toFixed(2);

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

          if (isNaN(ratio)) {
            measure = "-";
            measureUnits = "";
          }

          // format output

          if ((val1 + "").length > 7) {
            val1Out = Number(val1).toExponential();
          } else {
            val1Out = commafy(val1);
          }

          if (val1Out.toString().includes("e")) {
            val1Out = friendlyExponent(val1Out);
          }

          if ((val2 + "").length > 7) {
            val2Out = Number(val2).toExponential();
          } else {
            val2Out = commafy(val2);
          }

          if (val2Out.toString().includes("e")) {
            val2Out = friendlyExponent(val2Out);
          }
        // console.log("val1Out", val1Out);
      }

      const listItem = (
        // <details>
        //   <summary>
        //     {fieldAttrs.name}: {fieldAttrs.description}
        //   </summary>
        //   <p>
        //     {obj1.name}: {val1Out} {fieldAttrs.unit}
        //   </p>
        //   <p>
        //     {obj2.name}: {val2Out} {fieldAttrs.unit}
        //   </p>
        //   <p>
        //     Compared: {measure} {measureUnits}
        //   </p>
        // </details>
        <>
          <h1>{fieldAttrs.name}</h1>
          <p>
            <i>{fieldAttrs.description}</i>
          </p>
          <p>
            {fieldAttrs.name} of {obj1.name}: {val1Out} {fieldAttrs.unit}
          </p>
          <p>
            {fieldAttrs.name} of {obj2.name}: {val2Out} {fieldAttrs.unit}
          </p>
          <p>
            {fieldAttrs.name} of {obj1.name} vs {obj2.name}: {measure}{" "}
            {measureUnits}
          </p>
          <br />
        </>
      );

      list.push(listItem);

      return (
        <tr key={key}>
          <td onClick={objCtx.descHandler.bind(null, key)}>
            <abbr>{fieldAttrs.name}</abbr>
          </td>
          <td>
            {val1Out} {fieldAttrs.unit}
          </td>
          <td>
            {val2Out} {fieldAttrs.unit}
          </td>
          <td>
            {measure} {measureUnits}
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <table className={classes.CompareTable}>
        <thead>
          <tr>
            <td>Property</td>
            <td>
              {/* <select onChange={props.comp1Handler} value={props.id1}>
              {props.objList}
            </select> */}
              {objCtx.getObj(props.id1)["name"]}
            </td>
            <td>
              {/* <select onChange={props.comp2Handler} value={props.id2}>
              {props.objList}
            </select> */}
              {objCtx.getObj(props.id2)["name"]}
            </td>
            <td>Difference</td>
          </tr>
        </thead>
        <tbody>{output()}</tbody>
      </table>

      <p>
        <br />
      </p>

      <h1>
        {objCtx.getObj(props.id1)["name"]} vs.{" "}
        {objCtx.getObj(props.id2)["name"]} (expanded)
      </h1>
      <div style={{ "text-align": "left" }}>{list}</div>
    </>
  );
};

export default CompareSide;
