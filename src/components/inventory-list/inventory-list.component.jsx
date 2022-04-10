import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import InventoryItem from "../inventory-item/inventory-item.component";

const InventoryList = (props) => {
  const headerAttributes = {
    category: "Category",
    sku: "SKU",
    image: "",
    size: "Size",
    fit: "Fit",
    fiber: "Fiber",
  };

  const [isLoading, setIsLoading] = useState(true);
  const [clothing, setClothing] = useState([]);

  useEffect(() => {
    fetch("/clothing")
      .then((res) => res.json())
      .then((response) => {
        setClothing(response.results);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mid">
      {isLoading && <p>One Second, I'm still loading...</p>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>SKU</th>
            <th>Category</th>
            <th>Size</th>
            <th>Fit</th>
            <th>Fiber</th>
          </tr>
        </thead>
        <tbody>
          {clothing.map((item) => (
            <InventoryItem
              key={item.attributes.sku}
              itemAttributes={item.attributes}
            />
          ))}
        </tbody>
      </Table>

      <Button>Export Data</Button>
    </div>
  );
};

export default InventoryList;
