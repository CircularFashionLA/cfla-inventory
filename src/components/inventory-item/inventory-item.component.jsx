import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./inventory-item.styles.scss";

const InventoryItem = ({ itemAttributes, deleteClothing, id }) => {
  const { category, sku, image, size, fit, fiber } = itemAttributes;
  const [sizeStr] = useState(() => {
    let str = "";
    for (const key in size) {
      if (size[key]) {
        if (key === "twoX") str = str.concat(`xx, `);
        else if (key === "threeX") str = str.concat(`xxx, `);
        else str = str.concat(`${key}, `);
      }
    }
    return str.slice(0, -2);
  });

  return (
    <tr>
      <td
        className="inventory-item-image"
        style={{
          backgroundImage: `url("${image}")`,
        }}
      ></td>
      <td>{sku}</td>
      <td>{category}</td>
      <td>{sizeStr}</td>
      <td>{fit}</td>
      <td>{fiber}</td>
      <td>
        <Button varient="danger" onClick={() => deleteClothing(id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default InventoryItem;
