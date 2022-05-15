import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import "./csv-export.styles.scss";

export const CsvExport = () => {
  const [csvData, setCsvData] = useState();
  const [headers, setHeaders] = useState();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACK_END}/clothing/csv-format`)
      .then((res) => res.json())
      .then((response) => {
        const { csvFormatedClothing, headers } = response.results;
        setCsvData(csvFormatedClothing);
        setHeaders(headers);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {csvData && (
        <div className="csv-export-container">
          <CSVLink
            className="csv-btn"
            data={csvData}
            headers={headers}
            filename="CFLA Inventory"
          >
            Export Table
          </CSVLink>
        </div>
      )}
    </>
  );
};

export default CsvExport;
