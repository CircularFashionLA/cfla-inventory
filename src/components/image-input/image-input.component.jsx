import React, { useState } from "react";

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
      "https://nameless-shore-41429.herokuapp.com/https://cfla-inventory-form.herokuapp.com/images/geturl",
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
      <p>image upload</p>
      <input type="file" name="image" onChange={handleFileInputChange} />
      <button type="button" onClick={() => handleSubmitFile()}>
        Upload
      </button>
      {previewSource && <img src={previewSource} alt="" />}
    </>
  );
};

export default ImageInput;
