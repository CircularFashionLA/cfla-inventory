import React from 'react'
import { Form, Button } from "react-bootstrap"


const SecondaryForm = ({ attributes, setAttributes, measurements, setMeasurements, incrementFormPage }) => {

    const TopsQuestions = () => {
        return (
            <>
                {attributes.offShoulder ? <></> :
                    <div className="shoulder-width">
                        <Form.Label className="form-label">
                            Shoulder Width
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Sub-Categories"
                            onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                        />
                    </div>
                }

                <div className="chest-width">
                    <Form.Label className="form-label">
                        Chest Width
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Sub-Categories"
                        onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                    />
                </div>

                {attributes.sleeveless ? <></> :
                    <div className="sleeveQuestions">
                        <div className="sleeve-length">
                            <Form.Label className="form-label">
                                Sleeve Length
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Sub-Categories"
                                onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                            />
                        </div>
                        <div className="bicep-width">
                            <Form.Label className="form-label">
                                Bicep Width
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Sub-Categories"
                                onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                            />
                        </div>
                    </div>
                }

                <div className="garmet-length">
                    <Form.Label className="form-label">
                        Garmet Length
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Sub-Categories"
                        onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                    />
                </div>
                <div className="bottomHemSweep">
                    <Form.Label className="form-label">
                        Bottom Hem Sweep
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Sub-Categories"
                        onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                    />
                </div>
            </>)
    }

    const JacketsQuestions = () => {
        return (
            <>
                {attributes.offShoulder ? <></> :
                    <div className="shoulder-width">
                        <Form.Label className="form-label">
                            Shoulder Width
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Sub-Categories"
                            onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                        />
                    </div>
                }

                <div className="chest-width">
                    <Form.Label className="form-label">
                        Chest Width
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Sub-Categories"
                        onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                    />
                </div>

                <div className="garmet-length">
                    <Form.Label className="form-label">
                        Garmet Length
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Sub-Categories"
                        onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                    />
                </div>
                <div className="bottomHemSweep">
                    <Form.Label className="form-label">
                        Bottom Hem Sweep
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Sub-Categories"
                        onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                    />
                </div>
            </>)
    }

    const DressesQuestions = () => {
        return (
            <>
                {attributes.offShoulder ? <></> :
                    <div className="shoulder-width">
                        <Form.Label className="form-label">
                            Shoulder Width
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Sub-Categories"
                            onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                        />
                    </div>
                }

                <div className="chest-width">
                    <Form.Label className="form-label">
                        Chest Width
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Sub-Categories"
                        onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                    />
                </div>

                {attributes.sleeveless ? <></> :
                    <div className="sleeveQuestions">
                        <div className="sleeve-length">
                            <Form.Label className="form-label">
                                Sleeve Length
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Sub-Categories"
                                onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                            />
                        </div>
                        <div className="bicep-width">
                            <Form.Label className="form-label">
                                Bicep Width
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Sub-Categories"
                                onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                            />
                        </div>
                    </div>
                }

                <div className="garmet-length">
                    <Form.Label className="form-label">
                        Garmet Length
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Sub-Categories"
                        onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                    />
                </div>
                <div className="bottomHemSweep">
                    <Form.Label className="form-label">
                        Bottom Hem Sweep
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Sub-Categories"
                        onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                    />
                </div>
                <div className="bottomHemSweep">
                    <Form.Label className="form-label">
                        Hip Width
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Sub-Categories"
                        onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                    />
                </div>
                <div className="bottomHemSweep">
                    <Form.Label className="form-label">
                        Thigh Width
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Sub-Categories"
                        onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                    />
                </div>
                <div className="bottomHemSweep">
                    <Form.Label className="form-label">
                        Rise
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Sub-Categories"
                        onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                    />
                </div>
            </>)
    }

    const PantsQuestion = () => {
        return (<>
            <div className="bottomHemSweep">
                <Form.Label className="form-label">
                    Hip Width
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Sub-Categories"
                    onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                />
            </div>
            <div className="bottomHemSweep">
                <Form.Label className="form-label">
                    Thigh Width
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Sub-Categories"
                    onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                />
            </div>
            <div className="bottomHemSweep">
                <Form.Label className="form-label">
                    Rise
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Sub-Categories"
                    onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                />
            </div>
            <div className="bottomHemSweep">
                <Form.Label className="form-label">
                    Inseam
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Sub-Categories"
                    onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                />
            </div>
            <div className="bottomHemSweep">
                <Form.Label className="form-label">
                    Outseam
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Sub-Categories"
                    onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                />
            </div>
        </>)
    }

    const SkirtsQuestion = () => {
        return (<>
            <div className="bottomHemSweep">
                <Form.Label className="form-label">
                    Hip Width
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Sub-Categories"
                    onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                />
            </div>
            <div className="bottomHemSweep">
                <Form.Label className="form-label">
                    Thigh Width
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Sub-Categories"
                    onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                />
            </div>
            <div className="bottomHemSweep">
                <Form.Label className="form-label">
                    Rise
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Sub-Categories"
                    onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                />
            </div>
        </>)
    }

    const RompersQuestions = () => {
        return (
            <>
                {attributes.offShoulder ? <></> :
                    <div className="shoulder-width">
                        <Form.Label className="form-label">
                            Shoulder Width
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Sub-Categories"
                            onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                        />
                    </div>
                }

                <div className="chest-width">
                    <Form.Label className="form-label">
                        Chest Width
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Sub-Categories"
                        onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                    />
                </div>

                {attributes.sleeveless ? <></> :
                    <div className="sleeveQuestions">
                        <div className="sleeve-length">
                            <Form.Label className="form-label">
                                Sleeve Length
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Sub-Categories"
                                onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                            />
                        </div>
                        <div className="bicep-width">
                            <Form.Label className="form-label">
                                Bicep Width
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Sub-Categories"
                                onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                            />
                        </div>
                    </div>
                }

                <div className="garmet-length">
                    <Form.Label className="form-label">
                        Garmet Length
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Sub-Categories"
                        onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                    />
                </div>
                <div className="bottomHemSweep">
                    <Form.Label className="form-label">
                        Bottom Hem Sweep
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Sub-Categories"
                        onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                    />
                </div>
                <div className="bottomHemSweep">
                    <Form.Label className="form-label">
                        Hip Width
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Sub-Categories"
                        onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                    />
                </div>
                <div className="bottomHemSweep">
                    <Form.Label className="form-label">
                        Thigh Width
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Sub-Categories"
                        onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                    />
                </div>
                <div className="bottomHemSweep">
                    <Form.Label className="form-label">
                        Rise
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Sub-Categories"
                        onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                    />
                </div>
                <div className="bottomHemSweep">
                    <Form.Label className="form-label">
                        Inseam
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Sub-Categories"
                        onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                    />
                </div>
                <div className="bottomHemSweep">
                    <Form.Label className="form-label">
                        Outseam
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Sub-Categories"
                        onChange={(e) => setMeasurements({ ...measurements, waistWidth: e.target.value })}
                    />
                </div>
            </>)
    }

    const CategorySpecificQuestions = () => {
        switch (attributes.category) {
            case "Tops":
                return <TopsQuestions />

            case "Pants/Shorts":
                return <PantsQuestion />

            case "Jackets":
                return <JacketsQuestions />

            case "Dresses":
                return <DressesQuestions />

            case "Skirts":
                return <SkirtsQuestion />

            case "Rompers, Jumpsuits, or Overalls":
                return <RompersQuestions />

            default:
                return <></>
        }
    }

    return (
        <div>
            <h1>{attributes.category} </h1>
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
                <div className="category-specific-questions">
                    <CategorySpecificQuestions />
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