import React from 'react'
import { Form, Button } from "react-bootstrap"


const SecondaryForm = ({ incrementFormPage }) => {
    return (
        <div>
            <Form>

                <Button
                    variant="primary"
                    onClick={() => incrementFormPage(-1)}
                >
                    Back
                </Button>
                <Button
                    variant="primary"
                    onClick={() => incrementFormPage(1)}
                >
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SecondaryForm