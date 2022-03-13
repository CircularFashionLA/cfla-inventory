import { React, useState } from "react";
import { Form, Button } from "react-bootstrap";

function SecondForm() {
	const [subCategory, setSubCategory] = useState("");
	const [waistWidth, setWaistWidth] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(subCategory);
	};

	return (
		<div className="mid">
			<div className="sectioned-form">
				<Form>
					<Form.Group className="text-attributes" controlId="formSub">
						<Form.Label className="form-label">
							Sub Categories
						</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter Sub-Categories"
							onChange={(e) => setSubCategory(e.target.value)}
						/>
						<br />
						<Form.Label className="form-label">
							Waist Width
						</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter Sub-Categories"
							onChange={(e) => setWaistWidth(e.target.value)}
						/>
					</Form.Group>
					<Button
						variant="primary"
						type="submit"
						onClick={(e) => handleSubmit(e)}
					>
						Submit
					</Button>
				</Form>
			</div>
		</div>
	);
}

export default SecondForm;
