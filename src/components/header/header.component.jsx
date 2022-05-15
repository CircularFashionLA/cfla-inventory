import React from "react";
import CsvExport from "../csv-export/csv-export.component";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo"></div>
      <div className="header-export">
        <CsvExport />
      </div>
    </div>
  );
};

export default Header;
