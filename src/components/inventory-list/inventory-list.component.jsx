import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import CsvExport from "../csv-export/csv-export.component";
import InventoryItem from "../inventory-item/inventory-item.component";

import "./inventory-list.styles.scss";

const InventoryList = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [clothing, setClothing] = useState([]);

  useEffect(() => {
    fetch("https://cfla-inventory-form.herokuapp.com/clothing")
      .then((res) => res.json())
      .then((response) => {
        setClothing(response.results);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteClothing = (id) => {
    fetch(`https://cfla-inventory-form.herokuapp.com/clothing/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="mid">
      {isLoading && <p>One Second, I'm still loading...</p>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>SKU</th>
            <th>Category</th>
            <th>Size</th>
            <th>Fiber</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {clothing.map((item) => (
            <InventoryItem
              key={item._id}
              itemAttributes={item.attributes}
              id={item._id}
              deleteClothing={deleteClothing}
            />
          ))}
        </tbody>
      </Table>
      <CsvExport />
    </div>
  );
};

export default InventoryList;
