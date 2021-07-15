import React, { useContext, useState } from "react";
import ObjectContext from "../../store/ObjectContext";
import classes from "./SideBySideCompare.module.css";
import CompareSide from "./CompareSide/CompareSide";

const SideBySideCompare = () => {
  const objCtx = useContext(ObjectContext);
  const [id1, setId1] = useState(0);
  const [id2, setId2] = useState(1);

  const objList = objCtx.objects.map((object) => {
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

  return (
    <div className={classes.Compare}>
      <div>
        <select onChange={comp1Handler} value={id1}>
          {objList}
        </select>
        <CompareSide id1={id1} id2={id2} />
      </div>
      <div className={classes.versus}>vs.</div>
      <div>
        <select onChange={comp2Handler} value={id2}>
          {objList}
        </select>
        <CompareSide id1={id2} id2={id1} />
      </div>
    </div>
  );
};

export default SideBySideCompare;
