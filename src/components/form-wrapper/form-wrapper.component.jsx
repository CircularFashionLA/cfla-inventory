import { React, useState } from "react";
import FormConfirmation from "../form-pages/confirmation.component";
import PrimaryForm from "../form-pages/primary-form.component";
import SecondaryForm from "../form-pages/secondary-form.component";
import "./form-wrapper.styles.scss";
// import { useLocation } from "react-router-dom";

const FormWraper = ({ edit }) => {
  // use effect
  // check if edit is true
  // if it is, use useHistory to get the id from the url and look for the item in the database
  // if any errors come up, display them instead of the form

  const submitClothing = () => {
    fetch(`${process.env.REACT_APP_BACK_END}/clothing`, {
      method: "POST",
      body: JSON.stringify({ attributes, measurements }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        incrementFormPage(1);
      })
      .catch((error) => console.log(error));
  };

  const [attributes, setAttributes] = useState({
    category: "Tops",
    offShoulder: null,
    addMeasurmentsToDescription: false,
    careInstructions: "",
    areShorts: false,
    sleeveless: null,
    subCategory: "",
    productName: "",
    sku: "",
    image: "",
    stretchy: false,
    adjustable: false,
    colors: {
      black: false,
      white: false,
      grey: false,
      brown: false,
      beige: false,
      navy: false,
      pink: false,
      red: false,
      orange: false,
      yellow: false,
      green: false,
      turquoise: false,
      bluekpruple: false,
      maroon: false,
      mettalic: false,
      neon: false,
    },
    size: {
      xs: false,
      s: false,
      m: false,
      l: false,
      xl: false,
      twoX: false,
      threeX: false,
    },
    fit: {
      tightAndStretchy: false,
      slimTailored: false,
      looselyOversized: false,
    },
    fiber: "",
  });

  const [measurements, setMeasurements] = useState({
    waistWidth: null,
  });

  const [formPage, setFormPage] = useState(0);

  const incrementFormPage = (incrementAmount) =>
    setFormPage(formPage + incrementAmount);

  const switchFormPage = (formPage) => {
    switch (formPage) {
      case 0:
        const primaryFormProps = {
          attributes,
          setAttributes,
          incrementFormPage,
        };
        return <PrimaryForm {...primaryFormProps} />;

      case 1:
        const secondaryFormProps = {
          measurements,
          setMeasurements,
          attributes,
          setAttributes,
          incrementFormPage,
          submitClothing,
        };
        return <SecondaryForm {...secondaryFormProps} />;

      case 2:
        return <FormConfirmation productName={attributes.productName} />;

      default:
        break;
    }
  };

  return (
    <div className="form-wrapper">
      <div className="inner-border">{switchFormPage(formPage)}</div>
    </div>
  );
};

export default FormWraper;
