import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <h1>Credits</h1>
      <p>
        Icons made by&nbsp;
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>
        &nbsp;from&nbsp;
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </p>
    </div>
  );
};

export default Footer;
