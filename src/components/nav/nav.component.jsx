import React from "react";
import { Link } from "react-router-dom";

import "./nav.styles.scss";

const Nav = (props) => {
  return (
    <nav className="mid nav">
      <Link className="nav-links" to="/">
        Inventory
      </Link>
      <Link className="nav-links" to="/form">
        Form
      </Link>
    </nav>
  );
};

export default Nav;
