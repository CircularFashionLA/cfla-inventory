import { React, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Dropzone from "react-dropzone";
import "bootstrap/dist/css/bootstrap.min.css";

const MainForm = () => {
	const [category, setCategory] = useState("Tops");
	const [productName, setProductName] = useState("");
	const [sku, setSku] = useState("");
	const [image, setImage] = useState("");
	const [stretchy, setStretchy] = useState();
	const [adjustable, setAdjustable] = useState();
	const [colors, setColors] = useState({
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
	});
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
		console.log(image);

		console.log(stretchy);
		console.log(adjustable);

		console.log(colors);

		console.log(size);
		console.log(fit);
		console.log(fiber);
	};

	const topType = <>
		<Form.Label className="form-label">Size</Form.Label>
		{["checkbox"].map((type) => (
			<div key={`inline-${type}`} className="mb-3">
				<Form.Check
					onClick={(e) =>
						setSize({
							...size,
							xs: e.target.checked,
						})
					}
					inline
					label="XS"
					name="size"
					type={type}
					id={`inline-${type}-1`}
				/>

				<Form.Check
					onClick={(e) =>
						setSize({
							...size,
							s: e.target.checked,
						})
					}
					inline
					label="S"
					name="size"
					type={type}
					id={`inline-${type}-1`}
				/>
			</div>
		))}
	</>

	return (
		<div className="mid">
			<div className="sectioned-form">
				<h1 className="page-title">Inventory</h1>
				<Form>
					<Form.Label className="form-label"> Categories </Form.Label>
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


					<Form.Label className="form-label">Product Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Product name"
						onChange={(e) => setProductName(e.target.value)}
					/>
					<br />
					<Form.Label className="form-label">
						Stock-Keeping Unit
					</Form.Label>
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
						<Form.Label className="form-label">
							Image URL &#127760;
						</Form.Label>
						<Dropzone
							onDrop={(acceptedFiles) => setImage(acceptedFiles)}
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
					</Form.Group>
					{/*<Form.Text className='sub'> pls tell me the url</Form.Text>
                 addhere*/}
					<Form.Group
						className="form-Column"
						controlId="formBasicPassword"
					></Form.Group>
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
					<Form.Label className="form-label">
						{" "}
						Neutral Colors{" "}
					</Form.Label>
					{["checkbox"].map((type) => (
						<div key={`inline-${type}`} className="mb-3">
							<Form.Check
								onClick={(e) =>
									setColors({
										...colors,
										black: e.target.checked,
									})
								}
								inline
								label="Black"
								name="category"
								type={type}
								id={`inline-${type}-1`}
							/>

							<Form.Check
								onClick={(e) =>
									setColors({
										...colors,
										white: e.target.checked,
									})
								}
								inline
								label="White"
								name="category"
								type={type}
								id={`inline-${type}-2`}
							/>
							<Form.Check
								onClick={(e) =>
									setColors({
										...colors,
										grey: e.target.checked,
									})
								}
								inline
								name="category"
								label="Grey"
								type={type}
								id={`inline-${type}-3`}
							/>
							<Form.Check
								onClick={(e) =>
									setColors({
										...colors,
										brown: e.target.checked,
									})
								}
								inline
								name="category"
								label="Brown"
								type={type}
								id={`inline-${type}-3`}
							/>
							<Form.Check
								onClick={(e) =>
									setColors({
										...colors,
										beige: e.target.checked,
									})
								}
								inline
								name="category"
								label="Beige"
								type={type}
								id={`inline-${type}-3`}
							/>
							<Form.Check
								onClick={(e) =>
									setColors({
										...colors,
										navy: e.target.checked,
									})
								}
								inline
								name="category"
								label="Navy"
								type={type}
								id={`inline-${type}-3`}
							/>
						</div>
					))}

					<Form.Label className="form-label">
						{" "}
						Standard Colors{" "}
					</Form.Label>
					{["checkbox"].map((type) => (
						<div key={`inline-${type}`} className="mb-3">
							<Form.Check
								onClick={(e) =>
									setColors({
										...colors,
										pink: e.target.checked,
									})
								}
								inline
								label="Pink"
								name="category"
								type={type}
								id={`inline-${type}-1`}
							/>

							<Form.Check
								onClick={(e) =>
									setColors({
										...colors,
										red: e.target.checked,
									})
								}
								inline
								label="Red"
								name="category"
								type={type}
								id={`inline-${type}-2`}
							/>
							<Form.Check
								onClick={(e) =>
									setColors({
										...colors,
										orange: e.target.checked,
									})
								}
								inline
								name="category"
								label="Orange"
								type={type}
								id={`inline-${type}-3`}
							/>
							<Form.Check
								onClick={(e) =>
									setColors({
										...colors,
										yellow: e.target.checked,
									})
								}
								inline
								name="category"
								label="Yellow"
								type={type}
								id={`inline-${type}-3`}
							/>
							<Form.Check
								onClick={(e) =>
									setColors({
										...colors,
										green: e.target.checked,
									})
								}
								inline
								name="category"
								label="Green"
								type={type}
								id={`inline-${type}-3`}
							/>
							<Form.Check
								onClick={(e) =>
									setColors({
										...colors,
										turquoise: e.target.checked,
									})
								}
								inline
								name="category"
								label="Turquoise"
								type={type}
								id={`inline-${type}-3`}
							/>

							<Form.Check
								onClick={(e) =>
									setColors({
										...colors,
										blue: e.target.checked,
									})
								}
								inline
								name="category"
								label="Blue"
								type={type}
								id={`inline-${type}-3`}
							/>

							<Form.Check
								onClick={(e) =>
									setColors({
										...colors,
										purple: e.target.checked,
									})
								}
								inline
								name="category"
								label="Purple"
								type={type}
								id={`inline-${type}-3`}
							/>

							<Form.Check
								onClick={(e) =>
									setColors({
										...colors,
										maroon: e.target.checked,
									})
								}
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
						<Form.Label className="form-label">Size</Form.Label>
						{["checkbox"].map((type) => (
							<div key={`inline-${type}`} className="mb-3">
								<Form.Check
									onClick={(e) =>
										setSize({
											...size,
											xs: e.target.checked,
										})
									}
									inline
									label="XS"
									name="size"
									type={type}
									id={`inline-${type}-1`}
								/>

								<Form.Check
									onClick={(e) =>
										setSize({
											...size,
											s: e.target.checked,
										})
									}
									inline
									label="S"
									name="size"
									type={type}
									id={`inline-${type}-1`}
								/>

								<Form.Check
									onClick={(e) =>
										setSize({
											...size,
											m: e.target.checked,
										})
									}
									inline
									label="M"
									name="size"
									type={type}
									id={`inline-${type}-1`}
								/>

								<Form.Check
									onClick={(e) =>
										setSize({
											...size,
											l: e.target.checked,
										})
									}
									inline
									label="L"
									name="size"
									type={type}
									id={`inline-${type}-1`}
								/>

								<Form.Check
									onClick={(e) =>
										setSize({
											...size,
											xl: e.target.checked,
										})
									}
									inline
									label="XL"
									name="size"
									type={type}
									id={`inline-${type}-1`}
								/>

								<Form.Check
									onClick={(e) =>
										setSize({
											...size,
											twoX: e.target.checked,
										})
									}
									inline
									label="2X"
									name="size"
									type={type}
									id={`inline-${type}-1`}
								/>

								<Form.Check
									onClick={(e) =>
										setSize({
											...size,
											threeX: e.target.checked,
										})
									}
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
						<Form.Label className="form-label">Fit</Form.Label>
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
						<Form.Label className="form-label">Fiber</Form.Label>
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
