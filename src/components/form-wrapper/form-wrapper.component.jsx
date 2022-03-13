import { React, useState } from "react";
import PrimaryForm from '../form-pages/primary-form.component'
import SecondaryForm from '../form-pages/secondary-form.component'

const FormWraper = () => {
    const [attributes, setAttributes] = useState({
        category: "Tops",
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


    return (
        <div>
            <p>Form Wrapper</p>
            <PrimaryForm attributes={attributes} setAttributes={setAttributes} />
            <SecondaryForm />
        </div>

    )
}

export default FormWraper