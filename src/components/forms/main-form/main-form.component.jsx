import { React, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MainForm = () => {
	const [category, setCategory] = useState("Tops");
	const [productName, setProductName] = useState("");
	const [sku, setSku] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [storeUrl, setStoreUrl] = useState("");
	const [stretchy, setStretchy] = useState();
	const [multipleColor, setMultipleColor] = useState();
	const [adjustable, setAdjustable] = useState();
	const [size, setSize] = useState({
		xs: false,
		s: false,
		m: false,
		l: false,
		xl: false,
		twoX: false,
		threeX: false,
	});
	const [fit, setFit] = useState("");
	const [fiber, setFiber] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(category);
		console.log(productName);
		console.log(sku);
		console.log(imageUrl);
		console.log(storeUrl);

		console.log(stretchy);
		console.log(multipleColor);
		console.log(adjustable);

		console.log(size);
		console.log(fit);
		console.log(fiber);
	};

	return (
		<div className="mid">
			<div className="sectioned-form">
				<h1 className="page-title">Inventory</h1>
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

					<Form.Label>Product Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Product name"
						onChange={(e) => setProductName(e.target.value)}
					/>
					<br />
					<Form.Label>Stock-Keeping Unit</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter SKU"
						onChange={(e) => setSku(e.target.value)}
					/>
					<Form.Group
						className="form-Column"
						controlId="formBasicEmail"
					>
						<br />
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
						<Form.Label>Store URL &#127980;</Form.Label>
						<Form.Control
							type="url"
							placeholder="Enter URL"
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
							setAdjustable("Adjustables " + e.target.checked)
						}
						type="switch"
						id="custom-switch"
						label="Adjustable"
					/>

					<br />
					<Form.Label> Neutral Colors </Form.Label>
					{["checkbox"].map((type) => (
						<div key={`inline-${type}`} className="mb-3">
							<Form.Check
								onClick={() => setCategory("Tops")}
								inline
								label="Black"
								name="category"
								type={type}
								id={`inline-${type}-1`}
							/>

							<Form.Check
								onClick={() => setCategory("Pants/Shorts")}
								inline
								label="White"
								name="category"
								type={type}
								id={`inline-${type}-2`}
							/>
							<Form.Check
								onClick={() => setCategory("Jackets")}
								inline
								name="category"
								label="Grey"
								type={type}
								id={`inline-${type}-3`}
							/>
							<Form.Check
								onClick={() => setCategory("Dresses")}
								inline
								name="category"
								label="Brown"
								type={type}
								id={`inline-${type}-3`}
							/>
							<Form.Check
								onClick={() => setCategory("Skirts")}
								inline
								name="category"
								label="Beige"
								type={type}
								id={`inline-${type}-3`}
							/>
							<Form.Check
								onClick={() => setCategory("Navy")}
								inline
								name="category"
								label="Navy"
								type={type}
								id={`inline-${type}-3`}
							/>
						</div>
					))}

					<Form.Label> Standard Colors </Form.Label>
					{["checkbox"].map((type) => (
						<div key={`inline-${type}`} className="mb-3">
							<Form.Check
								onClick={() => setCategory("Tops")}
								inline
								label="Pink"
								name="category"
								type={type}
								id={`inline-${type}-1`}
							/>

							<Form.Check
								onClick={() => setCategory("Pants/Shorts")}
								inline
								label="Red"
								name="category"
								type={type}
								id={`inline-${type}-2`}
							/>
							<Form.Check
								onClick={() => setCategory("Jackets")}
								inline
								name="category"
								label="Orange"
								type={type}
								id={`inline-${type}-3`}
							/>
							<Form.Check
								onClick={() => setCategory("Dresses")}
								inline
								name="category"
								label="Yellow"
								type={type}
								id={`inline-${type}-3`}
							/>
							<Form.Check
								onClick={() => setCategory("Skirts")}
								inline
								name="category"
								label="Green"
								type={type}
								id={`inline-${type}-3`}
							/>
							<Form.Check
								onClick={() => setCategory("Navy")}
								inline
								name="category"
								label="Turquoise"
								type={type}
								id={`inline-${type}-3`}
							/>

							<Form.Check
								onClick={() => setCategory("Navy")}
								inline
								name="category"
								label="Blue"
								type={type}
								id={`inline-${type}-3`}
							/>

							<Form.Check
								onClick={() => setCategory("Navy")}
								inline
								name="category"
								label="Purple"
								type={type}
								id={`inline-${type}-3`}
							/>

							<Form.Check
								onClick={() => setCategory("Navy")}
								inline
								name="category"
								label="Maroon"
								type={type}
								id={`inline-${type}-3`}
							/>
						</div>
					))}
					<Form.Group
						className="text-attributes"
						controlId="formBasicPassword"
					>
						<Form.Label>Size</Form.Label>
						{["checkbox"].map((type) => (
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
						{["radio"].map((type) => (
							<div key={`inline-${type}`} className="mb-3">
								<Form.Check
									onClick={() => setFit("Tight and Stretchy")}
									inline
									label="Tight and Stretchy"
									name="fit"
									type={type}
									id={`inline-${type}-1`}
								/>

								<Form.Check
									onClick={() => setFit("Slim Tailored")}
									inline
									defaultChecked
									label="Slim Tailored"
									name="fit"
									type={type}
									id={`inline-${type}-1`}
								/>

								<Form.Check
									onClick={() => setFit("Loose Oversized")}
									inline
									label="Loose Oversized"
									name="fit"
									type={type}
									id={`inline-${type}-1`}
								/>
							</div>
						))}
					</Form.Group>
					<Form.Group
						className="text-attributes"
						controlId="formBasicPassword"
					></Form.Group>
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
					></Form.Group>
					<br />
					<Button
						variant="primary"
						type="submit"
						onClick={(e) => handleSubmit(e)}
					>
						Next
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default MainForm;
