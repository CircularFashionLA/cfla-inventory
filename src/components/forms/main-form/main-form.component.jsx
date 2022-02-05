import React from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailn from '../../../App.css';


const MainForm = () => {
    return <div className='mid'>
        <h1 className='App1'>I'm the fit manny main form!!!</h1 >
        <div className='sectioned-form'>
            <Form>
                <Form.Label > Categories </Form.Label>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="Tops"
                            name="category"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                            inline
                            label="Pants/Shorts"
                            name="category"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        <Form.Check
                            inline
                            name="category"
                            label="Jackets (Include cardigans and zipup hoodies)"
                            type={type}
                            id={`inline-${type}-3`}
                        />
                        <Form.Check
                            inline
                            name="category"
                            label="Dresses"
                            type={type}
                            id={`inline-${type}-3`}
                        />
                        <Form.Check
                            inline
                            name="category"
                            label="Skirts"
                            type={type}
                            id={`inline-${type}-3`}
                        />
                        <Form.Check
                            inline
                            name="category"
                            label="Rompers, Jumpsuits, or Overalls"
                            type={type}
                            id={`inline-${type}-3`}
                        />
                    </div>
                ))}
                <Form.Group className='form-Column' controlId="formBasicEmail">
                    <Form.Label >Image URL &#127760;</Form.Label>
                    <Form.Control type="text" placeholder="Enter URL" />
                </Form.Group>
                {/*<Form.Text className='sub'> pls tell me the url</Form.Text>
                 addhere*/}
                <Form.Group className='form-Column' controlId="formBasicPassword">
                    <br />
                    <Form.Label>store URL &#127980;</Form.Label>
                    <Form.Control type="url" placeholder="Store URL" />
                </Form.Group>
                <br />
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Stretchy"
                />
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Multiple Colors"
                />
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Adjustable"
                />
                <br />
                <Form.Group className='text-attributes' controlId="formBasicPassword">
                    <Form.Label>Size</Form.Label>
                    <Form.Control type="text" placeholder="Size Input" />
                </Form.Group>
                <Form.Group className='text-attributes' controlId="formBasicPassword">
                    <Form.Label>Fit</Form.Label>
                    <Form.Control type="text" placeholder="Fit Input" />
                </Form.Group>
                <Form.Group className='text-attributes' controlId="formBasicPassword">
                    <Form.Label>Pattern</Form.Label>
                    {/*radio buttons*/}
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="Solid"
                                name="Pattern-Types"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label="Print"
                                name="Pattern-Types"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                inline
                                name="Pattern-Types"
                                label="Ombre"
                                type={type}
                                id={`inline-${type}-3`}
                            />
                        </div>
                    ))}
                </Form.Group>
                <Form.Group className='text-attributes' controlId="formBasicPassword">
                    <Form.Label>Fiber</Form.Label>
                    <Form.Control type="text" placeholder="Fiber Input" />
                </Form.Group>
                <Form.Group className='text-attributes' controlId="formBasicPassword">
                    <Form.Label>Waist Line Width</Form.Label>
                    <Form.Control type="number" placeholder="Waist Width Input" />
                </Form.Group>
                <br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    </div >;
};




export default MainForm;
