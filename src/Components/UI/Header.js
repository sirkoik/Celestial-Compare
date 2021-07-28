import React from "react";
import logoImage from "../../assets/jupiter.svg";
import classes from "./Header.module.css";

const headerMain = (
  <div className={classes.Header}>
    <div>
      <img className={classes.LogoImage} src={logoImage} alt="Logo" />
    </div>
    <div className={classes.LogoText}>
      Celestial
      <br />
      Compare
    </div>
  </div>
);

const headerCompare2 = (
  <div className={classes.Header}>
    <div>
      <img className={classes.LogoImage} src={logoImage} alt="Logo" />
      &nbsp;
      <img className={classes.LogoImage} src={logoImage} alt="Logo" />
    </div>
    <div className={classes.LogoText}>
      Compare
      <br />
      Two
    </div>
  </div>
);

const Header = (props) => {
  const header =
    props.headerType === "headerMain" ? headerMain : headerCompare2;

  return header;
};

export default Header;
