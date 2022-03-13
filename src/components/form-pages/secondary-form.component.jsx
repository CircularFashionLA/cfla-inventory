import React from 'react'
import { Form, Button } from "react-bootstrap"


const SecondaryForm = ({ attributes, setAttributes, measurements, setMeasurements, incrementFormPage }) => {
    return (
        <div>
            <Form>
                <div className="always-asked">
                    <div className="sub-categories">
                        <Form.Label className="form-label">
                            Sub Categories
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Sub-Categories"
                            onChange={(e) => setAttributes({ ...attributes, subCategory: e.target.value })}
                        />
                    </div>
                    <div className="waist-width">
                        <Form.Label className="form-label">
                            Waist Width
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Sub-Categories"
                            onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                        />

                    </div>
                </div>
                <div className="nav-btns">
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
                </div>

            </Form>
        </div>
    )
}

export default SecondaryForm