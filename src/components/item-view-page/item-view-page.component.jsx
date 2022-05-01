import React from "react";
import {
  stringifyColors,
  stringifyFit,
  stringifySizes,
} from "../../utils/stringify-attributes";

const ItemViewPage = ({ item }) => {
  try {
    const {
      colors,
      size,
      fit,
      category,
      offShoulder,
      sleeveless,
      subcategory,
      productName,
      sku,
      image,
      stretchy,
      adjustable,
      fiber,
    } = item.attributes;

    const {
      waistWidth,
      shoulderWidth,
      chestWidth,
      sleeveLength,
      bicepWidth,
      garmetLength,
      bottomHemSweep,
      hipWidth,
      thighWidth,
      rise,
      inseam,
      outseam,
      topOfChestToCrotch,
    } = item.measurements;

    return (
      <>
        <ul>
          <li>
            <b>Category </b>
            {category}
            {subcategory && ` - ${subcategory}`}
          </li>
          <li>
            <b>Color </b> {stringifyColors(colors)}
          </li>
          <li>
            <b>Size </b> {stringifySizes(size)} - {stringifyFit(fit)}
          </li>
          <li>
            <b>Fiber </b> {fiber}
          </li>
          <li>
            <b>Other </b> {sleeveless && "Sleeveless"}
            {offShoulder && ", Off Shoulder"}
            {stretchy && ", Stretchy"} {adjustable && ", Adjustable"}
          </li>
        </ul>
      </>
    );
  } catch (error) {
    console.log("there is no item");
  }

  return <>Item can not be found</>;
};

export default ItemViewPage;
