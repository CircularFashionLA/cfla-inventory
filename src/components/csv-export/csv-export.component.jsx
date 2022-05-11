import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";

export const CsvExport = () => {
  const [csvData, setCsvData] = useState();
  const [headers, setHeaders] = useState();
  useEffect(() => {
    fetch("/clothing/csv-format")
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
        <CSVLink data={csvData} headers={headers} filename="CFLA Inventory">
          Download me
        </CSVLink>
      )}
    </>
  );
};

export default CsvExport;
