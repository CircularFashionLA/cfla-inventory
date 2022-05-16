import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./nav.styles.scss";

const Nav = (props) => {
  const location = useLocation();
  const [url, setUrl] = useState(location.pathname);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setUrl("/");
        break;
      case "/form":
        setUrl("/form");
        break;
      default:
    }
  }, [location]);

  return (
    <nav className="nav">
      <div className={`nav-link-container ${url === "/" ? "active" : ""}`}>
        <Link className={`nav-links`} to="/">
          Inventory
        </Link>
      </div>
      <div className={`nav-link-container ${url === "/form" ? "active" : ""}`}>
        <Link className={`nav-links`} to="/form">
          Form
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
