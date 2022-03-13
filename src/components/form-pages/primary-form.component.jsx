import React from 'react'
import { Form, Button } from "react-bootstrap"
import Dropzone from "react-dropzone";

import './form.styles.scss'

const PrimaryForm = ({ attributes, setAttributes, incrementFormPage }) => {

    return (
        <div>
            <Form>
                <div className="category">
                    <Form.Label className="form-label"> Categories </Form.Label>
                    <Form.Check
                        onClick={() => setAttributes({ ...attributes, category: "Top" })}
                        inline
                        defaultChecked
                        label="Tops"
                        name="category"
                        type="radio"
                        id={`inline-$radio-1`}
                    />
                    <Form.Check
                        onClick={() => setAttributes({ ...attributes, category: "Pants/Shorts" })}
                        inline
                        label="Pants/Shorts"
                        name="category"
                        type="radio"
                        id={`inline-$radio-2`}
                    />
                    <Form.Check
                        onClick={() => setAttributes({ ...attributes, category: "Jackets" })}
                        inline
                        name="category"
                        label="Jackets (Include cardigans and zipup hoodies)"
                        type="radio"
                        id={`inline-$radio-3`}
                    />
                    <Form.Check
                        onClick={() => setAttributes({ ...attributes, category: "Dresses" })}
                        inline
                        name="category"
                        label="Dresses"
                        type="radio"
                        id={`inline-$radio-3`}
                    />
                    <Form.Check
                        onClick={() => setAttributes({ ...attributes, category: "Skirts" })}
                        inline
                        name="category"
                        label="Skirts"
                        type="radio"
                        id={`inline-$radio-3`}
                    />
                    <Form.Check
                        onClick={() =>
                            setAttributes({
                                ...attributes, category:
                                    "Rompers, Jumpsuits, or Overalls"
                            })
                        }
                        inline
                        name="category"
                        label="Rompers, Jumpsuits, or Overalls"
                        type="radio"
                        id={`inline-$radio-3`}
                    />
                </div>

                <div className="product-name">
                    <Form.Label className="form-label">Product Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Product name"
                        onChange={(e) => setAttributes({ ...attributes, productName: e.target.value })}
                    />
                </div>

                <div className="sku">
                    <Form.Label className="form-label">
                        Stock-Keeping Unit
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter SKU"
                        onChange={(e) => setAttributes({ ...attributes, sku: e.target.value })}
                    />
                </div>

                <div className="image">
                    <Form.Label className="form-label">
                        Image &#127760;
                    </Form.Label>
                    <Dropzone
                        onDrop={(acceptedFiles) => setAttributes({ ...attributes, image: acceptedFiles })}
                    >
                        {({ getRootProps, getInputProps }) => (
                            <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p className="img-input-box">
                                        Drag 'n' drop some files here, or
                                        click to select files
                                    </p>
                                </div>
                            </section>
                        )}
                    </Dropzone>
                </div>

                <div className="stretchy">
                    <Form.Check
                        onClick={(e) =>
                            setAttributes({ ...attributes, stretchy: e.target.checked })
                        }
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
                        type="switch"
                        id="custom-switch"
                        label="Adjustable"
                    />
                </div>

                <div className="colors">
                    <Form.Label className="form-label">
                        {" "}
                        Neutral Colors{" "}
                    </Form.Label>
                    <div className="mb-3">
                        <Form.Check
                            onClick={(e) =>
                                setAttributes({
                                    ...attributes, colors: {
                                        ...attributes.colors,
                                        black: e.target.checked,
                                    }
                                })
                            }
                            inline
                            label="Black"
                            name="category"
                            type="checkbox"
                        />

                        <Form.Check
                            onClick={(e) =>
                                setAttributes({
                                    ...attributes, colors: {
                                        ...attributes.colors,
                                        white: e.target.checked,
                                    }
                                })
                            }
                            inline
                            label="White"
                            name="category"
                            type="checkbox"
                        />
                        <Form.Check
                            onClick={(e) =>
                                setAttributes({
                                    ...attributes, colors: {
                                        ...attributes.colors,
                                        grey: e.target.checked,
                                    }
                                })
                            }
                            inline
                            name="category"
                            label="Grey"
                            type="checkbox"
                        />
                        <Form.Check
                            onClick={(e) =>
                                setAttributes({
                                    ...attributes, colors: {
                                        ...attributes.colors,
                                        brown: e.target.checked,
                                    }
                                })
                            }
                            inline
                            name="category"
                            label="Brown"
                            type="checkbox"
                        />
                        <Form.Check
                            onClick={(e) =>
                                setAttributes({
                                    ...attributes, colors: {
                                        ...attributes.colors,
                                        beige: e.target.checked,
                                    }
                                })
                            }
                            inline
                            name="category"
                            label="Beige"
                            type="checkbox"
                        />
                        <Form.Check
                            onClick={(e) =>
                                setAttributes({
                                    ...attributes, colors: {
                                        ...attributes.colors,
                                        navy: e.target.checked,
                                    }
                                })
                            }
                            inline
                            name="category"
                            label="Navy"
                            type="checkbox"
                        />
                    </div>

                    <Form.Label className="form-label">
                        {" "}
                        Standard Colors{" "}
                    </Form.Label>
                    <div className="mb-3">
                        <Form.Check
                            onClick={(e) =>
                                setAttributes({
                                    ...attributes, colors: {
                                        ...attributes.colors,
                                        pink: e.target.checked,
                                    }
                                })
                            }
                            inline
                            label="Pink"
                            name="category"
                            type="checkbox"
                        />

                        <Form.Check
                            onClick={(e) =>
                                setAttributes({
                                    ...attributes, colors: {
                                        ...attributes.colors,
                                        red: e.target.checked,
                                    }
                                })
                            }
                            inline
                            label="Red"
                            name="category"
                            type="checkbox"
                        />
                        <Form.Check
                            onClick={(e) =>
                                setAttributes({
                                    ...attributes, colors: {
                                        ...attributes.colors,
                                        orange: e.target.checked,
                                    }
                                })
                            }
                            inline
                            name="category"
                            label="Orange"
                            type="checkbox"
                        />
                        <Form.Check
                            onClick={(e) =>
                                setAttributes({
                                    ...attributes, colors: {
                                        ...attributes.colors,
                                        yellow: e.target.checked,
                                    }
                                })
                            }
                            inline
                            name="category"
                            label="Yellow"
                            type="checkbox"
                        />
                        <Form.Check
                            onClick={(e) =>
                                setAttributes({
                                    ...attributes, colors: {
                                        ...attributes.colors,
                                        green: e.target.checked,
                                    }
                                })
                            }
                            inline
                            name="category"
                            label="Green"
                            type="checkbox"
                        />
                        <Form.Check
                            onClick={(e) =>
                                setAttributes({
                                    ...attributes, colors: {
                                        ...attributes.colors,
                                        turquoise: e.target.checked,
                                    }
                                })
                            }
                            inline
                            name="category"
                            label="Turquoise"
                            type="checkbox"
                        />

                        <Form.Check
                            onClick={(e) =>
                                setAttributes({
                                    ...attributes, colors: {
                                        ...attributes.colors,
                                        blue: e.target.checked,
                                    }
                                })
                            }
                            inline
                            name="category"
                            label="Blue"
                            type="checkbox"
                        />

                        <Form.Check
                            onClick={(e) =>
                                setAttributes({
                                    ...attributes, colors: {
                                        ...attributes.colors,
                                        purple: e.target.checked,
                                    }
                                })
                            }
                            inline
                            name="category"
                            label="Purple"
                            type="checkbox"
                        />

                        <Form.Check
                            onClick={(e) =>
                                setAttributes({
                                    ...attributes, colors: {
                                        ...attributes.colors,
                                        maroon: e.target.checked,
                                    }
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
                                    ...attributes, size: {
                                        ...attributes.size,
                                        xs: e.target.checked,
                                    }
                                })
                            }
                            inline
                            label="XS"
                            name="size"
                            type="checkbox"
                        />

                        <Form.Check
                            onClick={(e) =>
                                setAttributes({
                                    ...attributes, size: {
                                        ...attributes.size,
                                        s: e.target.checked,
                                    }
                                })
                            }
                            inline
                            label="S"
                            name="size"
                            type="checkbox"
                        />

                        <Form.Check
                            onClick={(e) =>
                                setAttributes({
                                    ...attributes, size: {
                                        ...attributes.size,
                                        m: e.target.checked,
                                    }
                                })
                            }
                            inline
                            label="M"
                            name="size"
                            type="checkbox"
                        />

                        <Form.Check
                            onClick={(e) =>
                                setAttributes({
                                    ...attributes, size: {
                                        ...attributes.size,
                                        l: e.target.checked,
                                    }
                                })
                            }
                            inline
                            label="L"
                            name="size"
                            type="checkbox"
                        />

                        <Form.Check
                            onClick={(e) =>
                                setAttributes({
                                    ...attributes, size: {
                                        ...attributes.size,
                                        xl: e.target.checked,
                                    }
                                })
                            }
                            inline
                            label="XL"
                            name="size"
                            type="checkbox"
                        />

                        <Form.Check
                            onClick={(e) =>
                                setAttributes({
                                    ...attributes, size: {
                                        ...attributes.size,
                                        twoX: e.target.checked,
                                    }
                                })
                            }
                            inline
                            label="2X"
                            name="size"
                            type="checkbox"
                        />

                        <Form.Check
                            onClick={(e) =>
                                setAttributes({
                                    ...attributes, size: {
                                        ...attributes.size,
                                        threeX: e.target.checked,
                                    }
                                })
                            }
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
                            onClick={() => setAttributes({ ...attributes, fit: "Tight and Stretchy" })}
                            inline
                            label="Tight and Stretchy"
                            name="fit"
                            type="radio"
                        />

                        <Form.Check
                            onClick={() => setAttributes({ ...attributes, fit: "Slim Tailored" })}
                            inline
                            defaultChecked
                            label="Slim Tailored"
                            name="fit"
                            type="radio"
                        />

                        <Form.Check
                            onClick={() => setAttributes({ ...attributes, fit: "Loose Oversized" })}
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
                        onChange={(e) => setAttributes({ ...attributes, fiber: e.target.value })}
                    />
                </div>

                <div className="nav-btns">
                    <Button
                        variant="primary"
                        onClick={() => incrementFormPage(1)}
                    >
                        Next
                    </Button>
                </div>

            </Form>
        </div>
    )
}

export default PrimaryForm