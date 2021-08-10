import React from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../../assets/jupiter.svg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.Header}>
      <div className={classes.Logo}>
        <div>
          <img className={classes.LogoImage} src={logoImage} alt="Logo" />
        </div>
        <div className={classes.LogoText}>
          Celestial
          <br />
          Compare
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink
              className={classes.HeaderLink}
              activeClassName={classes.active}
              to="/sort-compare"
            >
              Rank sorter
            </NavLink>
          </li>
          <li>
            <NavLink
              className={classes.HeaderLink}
              activeClassName={classes.active}
              to="/side-by-side-compare"
            >
              Compare two
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
