import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import InventoryItem from "../inventory-item/inventory-item.component";

import "./inventory-list.styles.scss";

const InventoryList = ({ setCurrentItem }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [clothing, setClothing] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACK_END}/clothing`)
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
      <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>SKU</th>
              <th>Name</th>
              <th>Category</th>
              <th>Size</th>
              <th>Fiber</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {clothing.map((item) => (
              <InventoryItem
                key={item._id}
                itemAttributes={item.attributes}
                item={item}
                setCurrentItem={setCurrentItem}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default InventoryList;
