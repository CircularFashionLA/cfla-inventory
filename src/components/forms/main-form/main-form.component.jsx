import { React, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MainForm = () => {
	const [category, setCategory] = useState("Tops");
	const [imageUrl, setImageUrl] = useState("&#127760;");
	const [storeUrl, setStoreUrl] = useState("&#127980;");
	const [stretchy, setStretchy] = useState();
	const [multipleColor, setMultipleColor] = useState();
	const [adjustable, setAdjustable] = useState();
	const [size, setSize] = useState("");
	const [fit, setFit] = useState("");
	const [pattern, setPattern] = useState("");
	const [fiber, setFiber] = useState("");
	const [waistlineWidth, setWaistlineWidth] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(category);
		console.log(imageUrl);
		console.log(storeUrl);

		console.log(stretchy);
		console.log(multipleColor);
		console.log(adjustable);

		console.log(size);
		console.log(fit);
		console.log(pattern);
		console.log(fiber);
		console.log(waistlineWidth);
	};

	return (
		<div className="mid">
			<div className="sectioned-form">
				<Form>
					<Form.Label> Categories </Form.Label>
					{["radio"].map((type) => (
						<div key={`inline-${type}`} className="mb-3">
							<Form.Check
								onClick={() => setCategory("Tops")}
								inline
								defaultChecked
								label="Tops"
								name="category"
								type={type}
								id={`inline-${type}-1`}
							/>
							<Form.Check
								onClick={() => setCategory("Pants/Shorts")}
								inline
								label="Pants/Shorts"
								name="category"
								type={type}
								id={`inline-${type}-2`}
							/>
							<Form.Check
								onClick={() => setCategory("Jackets")}
								inline
								name="category"
								label="Jackets (Include cardigans and zipup hoodies)"
								type={type}
								id={`inline-${type}-3`}
							/>
							<Form.Check
								onClick={() => setCategory("Dresses")}
								inline
								name="category"
								label="Dresses"
								type={type}
								id={`inline-${type}-3`}
							/>
							<Form.Check
								onClick={() => setCategory("Skirts")}
								inline
								name="category"
								label="Skirts"
								type={type}
								id={`inline-${type}-3`}
							/>
							<Form.Check
								onClick={() =>
									setCategory(
										"Rompers, Jumpsuits, or Overalls"
									)
								}
								inline
								name="category"
								label="Rompers, Jumpsuits, or Overalls"
								type={type}
								id={`inline-${type}-3`}
							/>
						</div>
					))}
					<Form.Group
						className="form-Column"
						controlId="formBasicEmail"
					>
						<Form.Label>Image URL &#127760;</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter URL"
							onChange={(e) => setImageUrl(e.target.value)}
						/>
					</Form.Group>
					{/*<Form.Text className='sub'> pls tell me the url</Form.Text>
                 addhere*/}
					<Form.Group
						className="form-Column"
						controlId="formBasicPassword"
					>
						<br />
						<Form.Label>store URL &#127980;</Form.Label>
						<Form.Control
							type="url"
							placeholder="Store URL"
							onChange={(e) => setStoreUrl(e.target.value)}
						/>
					</Form.Group>
					<br />
					<Form.Check
						onClick={(e) =>
							setStretchy("Stretchy " + e.target.checked)
						}
						type="switch"
						id="custom-switch"
						label="Stretchy"
					/>
					<Form.Check
						onClick={(e) =>
							setMultipleColor(
								"Multiple Colors " + e.target.checked
							)
						}
						type="switch"
						id="custom-switch"
						label="Multiple Colors"
					/>
					<Form.Check
						onClick={(e) =>
							setAdjustable("Adjustables " + e.target.checked)
						}
						type="switch"
						id="custom-switch"
						label="Adjustable"
					/>
					<br />
					<Form.Group
						className="text-attributes"
						controlId="formBasicPassword"
					>
						<Form.Label>Size</Form.Label>
						{["radio"].map((type) => (
							<div key={`inline-${type}`} className="mb-3">
								<Form.Check
									onClick={() => setSize("XS")}
									inline
									label="XS"
									name="size"
									type={type}
									id={`inline-${type}-1`}
								/>

								<Form.Check
									onClick={() => setSize("S")}
									inline
									label="S"
									name="size"
									type={type}
									id={`inline-${type}-1`}
								/>

								<Form.Check
									onClick={() => setSize("M")}
									defaultChecked
									inline
									label="M"
									name="size"
									type={type}
									id={`inline-${type}-1`}
								/>

								<Form.Check
									onClick={() => setSize("L")}
									inline
									label="L"
									name="size"
									type={type}
									id={`inline-${type}-1`}
								/>

								<Form.Check
									onClick={() => setSize("XL")}
									inline
									label="XL"
									name="size"
									type={type}
									id={`inline-${type}-1`}
								/>

								<Form.Check
									onClick={() => setSize("2X")}
									inline
									label="2X"
									name="size"
									type={type}
									id={`inline-${type}-1`}
								/>

								<Form.Check
									onClick={() => setSize("3X")}
									inline
									label="3X"
									name="size"
									type={type}
									id={`inline-${type}-1`}
								/>
							</div>
						))}
					</Form.Group>
					<Form.Group
						className="text-attributes"
						controlId="formBasicPassword"
					>
						<Form.Label>Fit</Form.Label>
						<Form.Control
							type="text"
							placeholder="Fit Input"
							onChange={(e) => setFit(e.target.value)}
						/>
					</Form.Group>
					<Form.Group
						className="text-attributes"
						controlId="formBasicPassword"
					>
						<Form.Label>Pattern</Form.Label>
						{/*radio buttons*/}
						{["radio"].map((type) => (
							<div key={`inline-${type}`} className="mb-3">
								<Form.Check
									onClick={(e) =>
										setPattern("Solid Included")
									}
									inline
									label="Solid"
									name="Pattern-Types"
									type={type}
									id={`inline-${type}-1`}
								/>
								<Form.Check
									onClick={(e) =>
										setPattern("Print Included")
									}
									inline
									label="Print"
									name="Pattern-Types"
									type={type}
									id={`inline-${type}-2`}
								/>
								<Form.Check
									onClick={(e) =>
										setPattern("Ombre Included")
									}
									inline
									name="Pattern-Types"
									label="Ombre"
									type={type}
									id={`inline-${type}-3`}
								/>
							</div>
						))}
					</Form.Group>
					<Form.Group
						className="text-attributes"
						controlId="formBasicPassword"
					>
						<Form.Label>Fiber</Form.Label>
						<Form.Control
							type="text"
							placeholder="Fiber Input"
							onChange={(e) => setFiber(e.target.value)}
						/>
					</Form.Group>
					<Form.Group
						className="text-attributes"
						controlId="formBasicPassword"
					>
						<Form.Label>Waist Line Width</Form.Label>
						<Form.Control
							type="number"
							placeholder="Waist Width Input"
							onChange={(e) => setWaistlineWidth(e.target.value)}
						/>
					</Form.Group>
					<br />
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
};

export default MainForm;
