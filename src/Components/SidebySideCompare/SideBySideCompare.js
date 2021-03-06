import React, { useContext, useState } from "react";
import ObjectContext from "../../store/ObjectContext";
import classes from "./SideBySideCompare.module.css";
import CompareSide from "./CompareSide/CompareSide";

const SideBySideCompare = () => {
  const objCtx = useContext(ObjectContext);
  const [id1, setId1] = useState(3);
  const [id2, setId2] = useState(4);

  const obj1 = objCtx.getObj(id1);
  const obj2 = objCtx.getObj(id2);

  const objList = objCtx.objectsTemplate.map((object) => {
    return (
      <option key={object.id} value={object.id}>
        {object.name}
      </option>
    );
  });

  const comp1Handler = (event) => {
    setId1(event.target.value);
  };

  const comp2Handler = (event) => {
    setId2(event.target.value);
  };

  // switchHandler: switch comparison (e.g. A vs B to B vs A)
  const switchHandler = () => {
    const idA = id1;
    const idB = id2;

    setId1(idB);
    setId2(idA);
  };

  return (
    <>
      <div className={classes.CompareDescription}>
        <h1>Compare two objects</h1>
        <p>
          Compare the properties of two objects side-by-side. Choose different
          objects to compare by choosing them from the drop down menus.
        </p>
        <p>To swap the comparisons, click the button above the table.</p>
      </div>
      <div className={classes.Compare}>
        <div className={classes["CompareSide-Container"]}>
          <div className={classes["CompareSide-Sticky"]}>
            <h1 style={{ textAlign: "center" }}>
              <select
                onChange={comp1Handler}
                value={id1}
                style={{ width: "auto" }}
              >
                {objList}
              </select>
              &nbsp;vs.&nbsp;
              <select
                onChange={comp2Handler}
                value={id2}
                style={{ width: "auto" }}
              >
                {objList}
              </select>
              &nbsp;
              <button onClick={switchHandler} title="Switch">
                &lt;&gt;
              </button>
            </h1>
          </div>

          <p>
            <br />
          </p>

          <h1>
            {obj1.name} vs. {obj2.name} (table)
          </h1>

          <p style={{ textAlign: "left" }}>
            On small screens: Scroll the table side to side to see the entire
            comparison.
          </p>

          <CompareSide
            id1={id1}
            id2={id2}
            objList={objList}
            comp1Handler={comp1Handler}
            comp2Handler={comp2Handler}
          />
        </div>
      </div>
    </>
  );
};

export default SideBySideCompare;
