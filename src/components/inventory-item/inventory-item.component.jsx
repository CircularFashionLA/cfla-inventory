import React, { useState } from "react";
import "./inventory-item.styles.scss";
import { useNavigate } from "react-router-dom";

const InventoryItem = ({ itemAttributes, setCurrentItem, item }) => {
  const { category, sku, image, size, fiber, productName } = itemAttributes;
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

  let navigate = useNavigate();

  return (
    <tr
      className="table-row"
      onClick={() => {
        setCurrentItem(item);
        navigate("/item");
      }}
    >
      <td
        className="inventory-item-image table-data"
        style={{
          backgroundImage: `url("${image}")`,
        }}
      ></td>
      <td className="table-data">{sku}</td>
      <td className="table-data">{productName}</td>
      <td className="table-data">{category}</td>
      <td className="table-data">{sizeStr}</td>
      <td className="table-data">{fiber}</td>
    </tr>
  );
};

export default InventoryItem;
