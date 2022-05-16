import React, { useState } from "react";
import "./image-input.styles.scss";

const ImageInput = ({ attributes, setAttributes }) => {
  const [previewSource, setPreviewSource] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    if (!previewSource) return;

    getImagePublicUrl(previewSource);
  };

  const getImagePublicUrl = (base64EncodedImage) => {
    fetch(
      `${
        process.env.NODE_ENV === "production"
          ? "https://nameless-shore-41429.herokuapp.com/"
          : ""
      }${process.env.REACT_APP_BACK_END}/images/geturl`,
      {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { "Content-type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((res) => setAttributes({ ...attributes, image: res.url }))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="img-upload-btns">
        <input type="file" name="image" onChange={handleFileInputChange} />
        <button
          className="image-upload-btn"
          type="button"
          onClick={() => handleSubmitFile()}
        >
          Upload
        </button>
      </div>
      {previewSource && (
        <div
          className="img-upload-preview"
          style={{
            backgroundImage: `url("${previewSource}")`,
          }}
        ></div>
      )}
      {previewSource && <img src={previewSource} alt="" />}
    </>
  );
};

export default ImageInput;
