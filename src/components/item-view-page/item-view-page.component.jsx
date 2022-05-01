import React from "react";
import {
  stringifyColors,
  stringifyFit,
  stringifySizes,
} from "../../utils/stringify-attributes";

import "./item-view-page.styles.scss";

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
        <>
          <h1>
            {productName} ({sku})
          </h1>
        </>
        <div
          className="item-image"
          style={{
            backgroundImage: `url("${image}")`,
          }}
        ></div>
        <div className="item-data">
          <div className="item-data-attributes">
            <h2>Attributes</h2>
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
          </div>
          <div className="item-data-measurements">
            <h2>Measurements</h2>
            <ul>
              {shoulderWidth && (
                <li>
                  <b>Shoulder Width</b> {shoulderWidth}"
                </li>
              )}
              {chestWidth && (
                <li>
                  <b>Chest Wisdth</b> {chestWidth}"
                </li>
              )}
              {bicepWidth && (
                <li>
                  <b>Bicep Width</b> {bicepWidth}"
                </li>
              )}
              {sleeveLength && (
                <li>
                  <b>Sleeve Length</b> {sleeveLength}"
                </li>
              )}
              {waistWidth && (
                <li>
                  <b>Waist Width</b> {waistWidth}"
                </li>
              )}
              {bottomHemSweep && (
                <li>
                  <b>Bottom Hem Sweep</b> {bottomHemSweep}"
                </li>
              )}
              {rise && (
                <li>
                  <b>Rise</b> {rise}"
                </li>
              )}
              {hipWidth && (
                <li>
                  <b>Hip Width</b> {hipWidth}"
                </li>
              )}
              {topOfChestToCrotch && (
                <li>
                  <b>Top of Chest to Crotch</b> {topOfChestToCrotch}"
                </li>
              )}
              {thighWidth && (
                <li>
                  <b>Thigh Width</b> {thighWidth}"
                </li>
              )}
              {inseam && (
                <li>
                  <b>Inseam</b> {inseam}"
                </li>
              )}
              {outseam && (
                <li>
                  <b>Outseam</b> {outseam}"
                </li>
              )}
              {garmetLength && (
                <li>
                  <b>Garmet Length</b> {garmetLength}"
                </li>
              )}
            </ul>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.log("there is no item");
  }

  return <>Item can not be found</>;
};

export default ItemViewPage;
