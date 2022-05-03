import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./form.styles.scss";

function FormConfirmation({ productName }) {
  const navigate = useNavigate();
  return (
    <div className="confirmation-page">
      <p>{productName} has just been added!</p>
      <Button onClick={() => window.location.reload()}>
        Add More Clothing
      </Button>
      <Button onClick={() => navigate("/")}>View Inventory</Button>
    </div>
  );
}

export default FormConfirmation;
