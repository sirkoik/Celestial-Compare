import React from "react";
import logoImage from "../../assets/jupiter.svg";
import classes from "./Header.module.css";

const Header = () => {
  return (
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
};

export default Header;
