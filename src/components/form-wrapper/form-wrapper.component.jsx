import { React, useState } from "react";
import PrimaryForm from '../form-pages/primary-form.component'
import SecondaryForm from '../form-pages/secondary-form.component'

const FormWraper = () => {
    const [attributes, setAttributes] = useState({
        category: "Tops",
        offShoulder: null,
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
        fit: "",
        fiber: ""
    })

    const [measurements, setMeasurements] = useState({
        waistWidth: null
    })

    const [formPage, setFormPage] = useState(0)

    const incrementFormPage = (incrementAmount) => setFormPage(formPage + incrementAmount)

    const switchFormPage = (formPage) => {
        switch (formPage) {
            case 0:
                const primaryFormProps = {
                    attributes,
                    setAttributes,
                    incrementFormPage
                }
                return <PrimaryForm {...primaryFormProps} />

            case 1:
                const secondaryFormProps = {
                    measurements,
                    setMeasurements,
                    attributes,
                    setAttributes,
                    incrementFormPage
                }
                return <SecondaryForm {...secondaryFormProps} />

            default:
                break;
        }
    }




    return (
        <div>
            {switchFormPage(formPage)}
        </div>

    )
}

export default FormWraper