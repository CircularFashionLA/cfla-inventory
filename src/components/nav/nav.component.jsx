import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./nav.styles.scss";

const Nav = (props) => {
  const getUrl = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation();
    console.log(location.pathname);
  };

  return (
    <nav className="nav">
      <div className="postion">
        <div className="nav-link-container">
          <Link className="nav-links" onClick={() => getUrl()} to="/">
            Inventory
          </Link>
        </div>
      </div>
      <div className="nav-link-container">
        <Link className="nav-links" onClick={() => getUrl()} to="/form">
          Form
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
