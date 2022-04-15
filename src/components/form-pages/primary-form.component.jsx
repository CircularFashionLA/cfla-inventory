import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import "./form.styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// Import React FilePond
import { FilePond, File, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const PrimaryForm = ({ attributes, setAttributes, incrementFormPage }) => {
  const TopSpecificQuestions = () => {
    return (
      <>
        <Form.Label className="form-label">
          {" "}
          Tops Specific Questions{" "}
        </Form.Label>
        <div className="off-shoulder">
          <Form.Check
            onClick={(e) =>
              setAttributes({ ...attributes, offShoulder: e.target.checked })
            }
            type="switch"
            defaultChecked={attributes.offShoulder}
            id="custom-switch"
            label="Off Shoulder"
          />
        </div>
        <div className="sleeveless">
          <Form.Check
            onClick={(e) =>
              setAttributes({ ...attributes, sleeveless: e.target.checked })
            }
            defaultChecked={attributes.sleeveless}
            type="switch"
            id="custom-switch"
            label="Sleeveless"
          />
        </div>
      </>
    );
  };

  const [files, setFiles] = useState([]);

  return (
    <div>
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={3}
        server="http://localhost:8080/images/filepond"
        name="files" // {/* sets the file input name, it's filepond by default */}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
      <Form>
        <div className="category">
          <Form.Label className="form-label"> Categories </Form.Label>
          <Form.Check
            defaultChecked={attributes.category === "Tops" ? true : false}
            onClick={() => setAttributes({ ...attributes, category: "Tops" })}
            inline
            label="Tops"
            name="category"
            type="radio"
            id={`inline-$radio-1`}
          />
          <Form.Check
            defaultChecked={
              attributes.category === "Pants/Shorts" ? true : false
            }
            onClick={() =>
              setAttributes({ ...attributes, category: "Pants/Shorts" })
            }
            inline
            label="Pants/Shorts"
            name="category"
            type="radio"
            id={`inline-$radio-2`}
          />
          <Form.Check
            defaultChecked={attributes.category === "Jackets" ? true : false}
            onClick={() =>
              setAttributes({ ...attributes, category: "Jackets" })
            }
            inline
            name="category"
            label="Jackets (Include cardigans and zipup hoodies)"
            type="radio"
            id={`inline-$radio-3`}
          />
          <Form.Check
            defaultChecked={attributes.category === "Dresses" ? true : false}
            onClick={() =>
              setAttributes({ ...attributes, category: "Dresses" })
            }
            inline
            name="category"
            label="Dresses"
            type="radio"
            id={`inline-$radio-3`}
          />
          <Form.Check
            defaultChecked={attributes.category === "Skirts" ? true : false}
            onClick={() => setAttributes({ ...attributes, category: "Skirts" })}
            inline
            name="category"
            label="Skirts"
            type="radio"
            id={`inline-$radio-3`}
          />
          <Form.Check
            defaultChecked={
              attributes.category === "Rompers, Jumpsuits, or Overalls"
                ? true
                : false
            }
            onClick={() =>
              setAttributes({
                ...attributes,
                category: "Rompers, Jumpsuits, or Overalls",
              })
            }
            inline
            name="category"
            label="Rompers, Jumpsuits, or Overalls"
            type="radio"
            id={`inline-$radio-3`}
          />
        </div>

        {attributes.category === "Tops" ? <TopSpecificQuestions /> : <></>}

        <div className="product-name">
          <Form.Label className="form-label">Product Name</Form.Label>
          <Form.Control
            type="text"
            value={attributes.productName}
            placeholder="Enter Product name"
            onChange={(e) =>
              setAttributes({ ...attributes, productName: e.target.value })
            }
          />
        </div>

        <div className="sku">
          <Form.Label className="form-label">Stock-Keeping Unit</Form.Label>
          <Form.Control
            type="text"
            value={attributes.sku}
            placeholder="Enter SKU"
            onChange={(e) =>
              setAttributes({ ...attributes, sku: e.target.value })
            }
          />
        </div>

        <div className="image">
          <Form.Label className="form-label">Image &#127760;</Form.Label>
          <div className="image-drag-n-drop"></div>
        </div>

        <div className="stretchy">
          <Form.Check
            onClick={(e) =>
              setAttributes({ ...attributes, stretchy: e.target.checked })
            }
            defaultChecked={attributes.stretchy}
            type="switch"
            id="custom-switch"
            label="Stretchy"
          />
        </div>

        <div className="adjustable">
          <Form.Check
            onClick={(e) =>
              setAttributes({ ...attributes, adjustable: e.target.checked })
            }
            defaultChecked={attributes.adjustable}
            type="switch"
            id="custom-switch"
            label="Adjustable"
          />
        </div>

        <div className="colors">
          <Form.Label className="form-label"> Neutral Colors </Form.Label>
          <div className="mb-3">
            <Form.Check
              defaultChecked={attributes.colors.black ? true : false}
              onClick={(e) =>
                setAttributes({
                  ...attributes,
                  colors: {
                    ...attributes.colors,
                    black: e.target.checked,
                  },
                })
              }
              inline
              label="Black"
              name="category"
              type="checkbox"
            />

            <Form.Check
              defaultChecked={attributes.colors.white ? true : false}
              onClick={(e) =>
                setAttributes({
                  ...attributes,
                  colors: {
                    ...attributes.colors,
                    white: e.target.checked,
                  },
                })
              }
              inline
              label="White"
              name="category"
              type="checkbox"
            />
            <Form.Check
              defaultChecked={attributes.colors.grey ? true : false}
              onClick={(e) =>
                setAttributes({
                  ...attributes,
                  colors: {
                    ...attributes.colors,
                    grey: e.target.checked,
                  },
                })
              }
              inline
              name="category"
              label="Grey"
              type="checkbox"
            />
            <Form.Check
              defaultChecked={attributes.colors.brown ? true : false}
              onClick={(e) =>
                setAttributes({
                  ...attributes,
                  colors: {
                    ...attributes.colors,
                    brown: e.target.checked,
                  },
                })
              }
              inline
              name="category"
              label="Brown"
              type="checkbox"
            />
            <Form.Check
              defaultChecked={attributes.colors.beige ? true : false}
              onClick={(e) =>
                setAttributes({
                  ...attributes,
                  colors: {
                    ...attributes.colors,
                    beige: e.target.checked,
                  },
                })
              }
              inline
              name="category"
              label="Beige"
              type="checkbox"
            />
            <Form.Check
              defaultChecked={attributes.colors.navy ? true : false}
              onClick={(e) =>
                setAttributes({
                  ...attributes,
                  colors: {
                    ...attributes.colors,
                    navy: e.target.checked,
                  },
                })
              }
              inline
              name="category"
              label="Navy"
              type="checkbox"
            />
          </div>

          <Form.Label className="form-label"> Standard Colors </Form.Label>
          <div className="mb-3">
            <Form.Check
              defaultChecked={attributes.colors.pink ? true : false}
              onClick={(e) =>
                setAttributes({
                  ...attributes,
                  colors: {
                    ...attributes.colors,
                    pink: e.target.checked,
                  },
                })
              }
              inline
              label="Pink"
              name="category"
              type="checkbox"
            />

            <Form.Check
              defaultChecked={attributes.colors.red ? true : false}
              onClick={(e) =>
                setAttributes({
                  ...attributes,
                  colors: {
                    ...attributes.colors,
                    red: e.target.checked,
                  },
                })
              }
              inline
              label="Red"
              name="category"
              type="checkbox"
            />
            <Form.Check
              defaultChecked={attributes.colors.orange ? true : false}
              onClick={(e) =>
                setAttributes({
                  ...attributes,
                  colors: {
                    ...attributes.colors,
                    orange: e.target.checked,
                  },
                })
              }
              inline
              name="category"
              label="Orange"
              type="checkbox"
            />
            <Form.Check
              defaultChecked={attributes.colors.yellow ? true : false}
              onClick={(e) =>
                setAttributes({
                  ...attributes,
                  colors: {
                    ...attributes.colors,
                    yellow: e.target.checked,
                  },
                })
              }
              inline
              name="category"
              label="Yellow"
              type="checkbox"
            />
            <Form.Check
              defaultChecked={attributes.colors.green ? true : false}
              onClick={(e) =>
                setAttributes({
                  ...attributes,
                  colors: {
                    ...attributes.colors,
                    green: e.target.checked,
                  },
                })
              }
              inline
              name="category"
              label="Green"
              type="checkbox"
            />
            <Form.Check
              defaultChecked={attributes.colors.turquoise ? true : false}
              onClick={(e) =>
                setAttributes({
                  ...attributes,
                  colors: {
                    ...attributes.colors,
                    turquoise: e.target.checked,
                  },
                })
              }
              inline
              name="category"
              label="Turquoise"
              type="checkbox"
            />

            <Form.Check
              defaultChecked={attributes.colors.blue ? true : false}
              onClick={(e) =>
                setAttributes({
                  ...attributes,
                  colors: {
                    ...attributes.colors,
                    blue: e.target.checked,
                  },
                })
              }
              inline
              name="category"
              label="Blue"
              type="checkbox"
            />

            <Form.Check
              defaultChecked={attributes.colors.purple ? true : false}
              onClick={(e) =>
                setAttributes({
                  ...attributes,
                  colors: {
                    ...attributes.colors,
                    purple: e.target.checked,
                  },
                })
              }
              inline
              name="category"
              label="Purple"
              type="checkbox"
            />

            <Form.Check
              defaultChecked={attributes.colors.maroon ? true : false}
              onClick={(e) =>
                setAttributes({
                  ...attributes,
                  colors: {
                    ...attributes.colors,
                    maroon: e.target.checked,
                  },
                })
              }
              inline
              name="category"
              label="Maroon"
              type="checkbox"
            />
          </div>
        </div>

        <div className="size">
          <Form.Label className="form-label">Size</Form.Label>
          <div className="mb-3">
            <Form.Check
              onClick={(e) =>
                setAttributes({
                  ...attributes,
                  size: {
                    ...attributes.size,
                    xs: e.target.checked,
                  },
                })
              }
              defaultChecked={attributes.size.xs}
              inline
              label="XS"
              name="size"
              type="checkbox"
            />

            <Form.Check
              onClick={(e) =>
                setAttributes({
                  ...attributes,
                  size: {
                    ...attributes.size,
                    s: e.target.checked,
                  },
                })
              }
              defaultChecked={attributes.size.s}
              inline
              label="S"
              name="size"
              type="checkbox"
            />

            <Form.Check
              onClick={(e) =>
                setAttributes({
                  ...attributes,
                  size: {
                    ...attributes.size,
                    m: e.target.checked,
                  },
                })
              }
              defaultChecked={attributes.size.m}
              inline
              label="M"
              name="size"
              type="checkbox"
            />

            <Form.Check
              onClick={(e) =>
                setAttributes({
                  ...attributes,
                  size: {
                    ...attributes.size,
                    l: e.target.checked,
                  },
                })
              }
              defaultChecked={attributes.size.l}
              inline
              label="L"
              name="size"
              type="checkbox"
            />

            <Form.Check
              onClick={(e) =>
                setAttributes({
                  ...attributes,
                  size: {
                    ...attributes.size,
                    xl: e.target.checked,
                  },
                })
              }
              defaultChecked={attributes.size.xl}
              inline
              label="XL"
              name="size"
              type="checkbox"
            />

            <Form.Check
              onClick={(e) =>
                setAttributes({
                  ...attributes,
                  size: {
                    ...attributes.size,
                    twoX: e.target.checked,
                  },
                })
              }
              defaultChecked={attributes.size.twoX}
              inline
              label="2X"
              name="size"
              type="checkbox"
            />

            <Form.Check
              onClick={(e) =>
                setAttributes({
                  ...attributes,
                  size: {
                    ...attributes.size,
                    threeX: e.target.checked,
                  },
                })
              }
              defaultChecked={attributes.size.threeX}
              inline
              label="3X"
              name="size"
              type="checkbox"
            />
          </div>
        </div>

        <div className="fit">
          <Form.Label className="form-label">Fit</Form.Label>
          <div className="mb-3">
            <Form.Check
              defaultChecked={
                attributes.fit === "Tight and Stretchy" ? true : false
              }
              onClick={() =>
                setAttributes({ ...attributes, fit: "Tight and Stretchy" })
              }
              inline
              label="Tight and Stretchy"
              name="fit"
              type="radio"
            />

            <Form.Check
              defaultChecked={attributes.fit === "Slim Tailored" ? true : false}
              onClick={() =>
                setAttributes({ ...attributes, fit: "Slim Tailored" })
              }
              inline
              label="Slim Tailored"
              name="fit"
              type="radio"
            />

            <Form.Check
              defaultChecked={
                attributes.fit === "Loose Oversized" ? true : false
              }
              onClick={() =>
                setAttributes({ ...attributes, fit: "Loose Oversized" })
              }
              inline
              label="Loose Oversized"
              name="fit"
              type="radio"
            />
          </div>
        </div>

        <div className="fiber">
          <Form.Label className="form-label">Fiber</Form.Label>
          <Form.Control
            type="text"
            placeholder="Fiber Input"
            value={attributes.fiber}
            onChange={(e) =>
              setAttributes({ ...attributes, fiber: e.target.value })
            }
          />
        </div>

        <div className="nav-btns">
          <Button variant="primary" onClick={() => incrementFormPage(1)}>
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default PrimaryForm;
