import React from "react";
import { Form } from "react-bootstrap";

const SecondaryForm = ({
  attributes,
  setAttributes,
  measurements,
  setMeasurements,
  incrementFormPage,
  submitClothing,
}) => {
  return (
    <div>
      <Form>
        <div className="sides">
          <div className="left">
            <div className="always-asked">
              <Form.Label className="form-label">Sub Categories</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Sub-Categories"
                value={attributes.subCategory}
                onChange={(e) =>
                  setAttributes({ ...attributes, subCategory: e.target.value })
                }
              />
            </div>

            {attributes.category === "Tops" ? (
              <>
                {attributes.offShoulder ? (
                  <></>
                ) : (
                  <>
                    <Form.Label className="form-label">
                      Shoulder Width (IN)
                    </Form.Label>
                    <Form.Control
                      type="number"
                      onWheel={(e) => e.target.blur()}
                      placeholder="Enter Shoulder Width"
                      value={measurements.shoulderWidth || ""}
                      onChange={(e) =>
                        setMeasurements({
                          ...measurements,
                          shoulderWidth: e.target.value,
                        })
                      }
                    />
                  </>
                )}

                <Form.Label className="form-label">Chest Width (IN)</Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Enter Chest Width"
                  value={measurements.chestWidth || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      chestWidth: e.target.value,
                    })
                  }
                />

                {attributes.sleeveless ? (
                  <></>
                ) : (
                  <>
                    <Form.Label className="form-label">
                      Sleeve Length (IN)
                    </Form.Label>
                    <Form.Control
                      type="number"
                      onWheel={(e) => e.target.blur()}
                      placeholder="Enter Sleeve Length"
                      value={measurements.sleeveLength || ""}
                      onChange={(e) =>
                        setMeasurements({
                          ...measurements,
                          sleeveLength: e.target.value,
                        })
                      }
                    />

                    <Form.Label className="form-label">
                      Bicep Width (IN)
                    </Form.Label>
                    <Form.Control
                      type="number"
                      onWheel={(e) => e.target.blur()}
                      placeholder="Enter Bicep Width"
                      value={measurements.bicepWidth || ""}
                      onChange={(e) =>
                        setMeasurements({
                          ...measurements,
                          bicepWidth: e.target.value,
                        })
                      }
                    />
                  </>
                )}

                <div className="waist-width">
                  <Form.Label className="form-label">
                    Waist Width (IN)
                  </Form.Label>
                  <Form.Control
                    type="number"
                    onWheel={(e) => e.target.blur()}
                    placeholder="Enter Waist Width"
                    value={measurements.waistWidth || ""}
                    onChange={(e) =>
                      setMeasurements({
                        ...measurements,
                        waistWidth: e.target.value,
                      })
                    }
                  />
                </div>

                <Form.Label className="form-label">
                  Bottom Hem Sweep (IN)
                </Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Enter Bottom Hem Sweep"
                  value={measurements.bottomHemSweep || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      bottomHemSweep: e.target.value,
                    })
                  }
                />

                <Form.Label className="form-label">
                  Garmet Length (IN)
                </Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Enter Garmet Length"
                  value={measurements.garmetLength || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      garmetLength: e.target.value,
                    })
                  }
                />
              </>
            ) : null}

            {attributes.category === "Pants/Shorts" ? (
              <>
                <Form.Label className="form-label">Waist Width (IN)</Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Enter Waist Width"
                  value={measurements.waistWidth || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      waistWidth: e.target.value,
                    })
                  }
                />

                <Form.Label className="form-label">Hip Width (IN)</Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Enter Hip Width"
                  value={measurements.hipWidth || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      hipWidth: e.target.value,
                    })
                  }
                />

                <Form.Label className="form-label">Rise (IN)</Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Enter Rise"
                  value={measurements.rise || ""}
                  onChange={(e) =>
                    setMeasurements({ ...measurements, rise: e.target.value })
                  }
                />

                <Form.Label className="form-label">Thigh Width (IN)</Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Enter Thigh Width"
                  value={measurements.thighWidth || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      thighWidth: e.target.value,
                    })
                  }
                />

                {!attributes.areShorts && (
                  <>
                    <Form.Label className="form-label">
                      Calf Width (IN)
                    </Form.Label>
                    <Form.Control
                      type="number"
                      onWheel={(e) => e.target.blur()}
                      placeholder="Enter Calf Width"
                      value={measurements.calf || ""}
                      onChange={(e) =>
                        setMeasurements({
                          ...measurements,
                          calf: e.target.value,
                        })
                      }
                    />
                  </>
                )}

                <Form.Label className="form-label">Inseam (IN)</Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Enter Inseam"
                  value={measurements.inseam || ""}
                  onChange={(e) =>
                    setMeasurements({ ...measurements, inseam: e.target.value })
                  }
                />

                <Form.Label className="form-label">Outseam (IN)</Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Enter Outseam"
                  value={measurements.outseam || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      outseam: e.target.value,
                    })
                  }
                />
              </>
            ) : null}

            {attributes.category === "Jackets" ? (
              <>
                {attributes.offShoulder ? (
                  <></>
                ) : (
                  <>
                    <Form.Label className="form-label">
                      Shoulder Width (IN)
                    </Form.Label>
                    <Form.Control
                      type="number"
                      onWheel={(e) => e.target.blur()}
                      placeholder="Enter Shoulder Width"
                      value={measurements.shoulderWidth || ""}
                      onChange={(e) =>
                        setMeasurements({
                          ...measurements,
                          shoulderWidth: e.target.value,
                        })
                      }
                    />
                  </>
                )}

                <Form.Label className="form-label">Chest Width (IN)</Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Enter Chest Width"
                  value={measurements.chestWidth || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      chestWidth: e.target.value,
                    })
                  }
                />

                {attributes.sleeveless ? (
                  <></>
                ) : (
                  <>
                    <Form.Label className="form-label">
                      Sleeve Length (IN)
                    </Form.Label>
                    <Form.Control
                      type="number"
                      onWheel={(e) => e.target.blur()}
                      placeholder="Enter Sleeve Length"
                      value={measurements.sleeveLength || ""}
                      onChange={(e) =>
                        setMeasurements({
                          ...measurements,
                          sleeveLength: e.target.value,
                        })
                      }
                    />

                    <Form.Label className="form-label">
                      Bicep Width (IN)
                    </Form.Label>
                    <Form.Control
                      type="number"
                      onWheel={(e) => e.target.blur()}
                      placeholder="Enter Bicep Width"
                      value={measurements.bicepWidth || ""}
                      onChange={(e) =>
                        setMeasurements({
                          ...measurements,
                          bicepWidth: e.target.value,
                        })
                      }
                    />
                  </>
                )}

                <Form.Label className="form-label">Waist Width (IN)</Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Enter Waist Width"
                  value={measurements.waistWidth || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      waistWidth: e.target.value,
                    })
                  }
                />

                <Form.Label className="form-label">
                  Bottom Hem Sweep (IN)
                </Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Enter Bottom Hem Sweep"
                  value={measurements.bottomHemSweep || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      bottomHemSweep: e.target.value,
                    })
                  }
                />

                <Form.Label className="form-label">
                  Garmet Length (IN)
                </Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Enter Garmet Length"
                  value={measurements.garmetLength || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      garmetLength: e.target.value,
                    })
                  }
                />
              </>
            ) : null}

            {attributes.category === "Dresses" ? (
              <>
                {attributes.offShoulder ? (
                  <></>
                ) : (
                  <>
                    <Form.Label className="form-label">
                      Shoulder Width (IN)
                    </Form.Label>
                    <Form.Control
                      type="number"
                      onWheel={(e) => e.target.blur()}
                      placeholder="Enter Shoulder Width"
                      value={measurements.shoulderWidth || ""}
                      onChange={(e) =>
                        setMeasurements({
                          ...measurements,
                          shoulderWidth: e.target.value,
                        })
                      }
                    />
                  </>
                )}

                <Form.Label className="form-label">Chest Width (IN)</Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Enter Chest Width"
                  value={measurements.chestWidth || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      chestWidth: e.target.value,
                    })
                  }
                />

                {attributes.sleeveless ? (
                  <></>
                ) : (
                  <>
                    <Form.Label className="form-label">
                      Sleeve Length (IN)
                    </Form.Label>
                    <Form.Control
                      type="number"
                      onWheel={(e) => e.target.blur()}
                      placeholder="Enter Sleeve Length"
                      value={measurements.sleeveLength || ""}
                      onChange={(e) =>
                        setMeasurements({
                          ...measurements,
                          sleeveLength: e.target.value,
                        })
                      }
                    />

                    <Form.Label className="form-label">
                      Bicep Width (IN)
                    </Form.Label>
                    <Form.Control
                      type="number"
                      onWheel={(e) => e.target.blur()}
                      placeholder="Enter Bicep Width"
                      value={measurements.bicepWidth || ""}
                      onChange={(e) =>
                        setMeasurements({
                          ...measurements,
                          bicepWidth: e.target.value,
                        })
                      }
                    />
                  </>
                )}

                <Form.Label className="form-label">
                  Bottom Hem Sweep (IN)
                </Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Enter Bottom Hem Sweep"
                  value={measurements.bottomHemSweep || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      bottomHemSweep: e.target.value,
                    })
                  }
                />

                <Form.Label className="form-label">Hip Width (IN)</Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Enter Hip Width"
                  value={measurements.hipWidth || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      hipWidth: e.target.value,
                    })
                  }
                />

                <Form.Label className="form-label">Rise (IN)</Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Enter Rise"
                  value={measurements.rise || ""}
                  onChange={(e) =>
                    setMeasurements({ ...measurements, rise: e.target.value })
                  }
                />

                <Form.Label className="form-label">Thigh Width (IN)</Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Enter Thigh width"
                  value={measurements.thighWidth || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      thighWidth: e.target.value,
                    })
                  }
                />

                <Form.Label className="form-label">
                  Garmet Length (IN)
                </Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Enter Garmet Length"
                  value={measurements.garmetLength || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      garmetLength: e.target.value,
                    })
                  }
                />
              </>
            ) : null}

            {attributes.category === "Skirts" ? (
              <>
                <Form.Label className="form-label">Waist Width (IN)</Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Enter Waist Width"
                  value={measurements.waistWidth || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      waistWidth: e.target.value,
                    })
                  }
                />

                <Form.Label className="form-label">Hip Width (IN)</Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  value={measurements.hipWidth || ""}
                  placeholder="Enter Sub-Categories"
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      hipWidth: e.target.value,
                    })
                  }
                />

                <Form.Label className="form-label">Rise (IN)</Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  value={measurements.rise || ""}
                  placeholder="Enter Rise"
                  onChange={(e) =>
                    setMeasurements({ ...measurements, rise: e.target.value })
                  }
                />

                <Form.Label className="form-label">Thigh Width (IN)</Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  value={measurements.thighWidth || ""}
                  placeholder="Enter Sub-Categories"
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      thighWidth: e.target.value,
                    })
                  }
                />
              </>
            ) : null}

            {attributes.category === "Rompers, Jumpsuits, or Overalls" ? (
              <>
                {attributes.offShoulder ? (
                  <></>
                ) : (
                  <>
                    <Form.Label className="form-label">
                      Shoulder Width (IN)
                    </Form.Label>
                    <Form.Control
                      type="number"
                      onWheel={(e) => e.target.blur()}
                      value={measurements.shoulderWidth || ""}
                      placeholder="Enter Shoulder Width"
                      onChange={(e) =>
                        setMeasurements({
                          ...measurements,
                          shoulderWidth: e.target.value,
                        })
                      }
                    />
                  </>
                )}

                <Form.Label className="form-label">Chest Width (IN)</Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  value={measurements.chestWidth || ""}
                  placeholder="Enter Chest Width"
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      chestWidth: e.target.value,
                    })
                  }
                />

                {attributes.sleeveless ? (
                  <></>
                ) : (
                  <>
                    <Form.Label className="form-label">
                      Sleeve Length (IN)
                    </Form.Label>
                    <Form.Control
                      type="number"
                      onWheel={(e) => e.target.blur()}
                      value={measurements.sleeveLength || ""}
                      placeholder="Enter Sleeve Length"
                      onChange={(e) =>
                        setMeasurements({
                          ...measurements,
                          sleeveLength: e.target.value,
                        })
                      }
                    />

                    <Form.Label className="form-label">
                      Top of Chest to Crotch (IN)
                    </Form.Label>
                    <Form.Control
                      type="number"
                      onWheel={(e) => e.target.blur()}
                      value={measurements.topOfChestToCrotch || ""}
                      placeholder="Enter Head to Crotch"
                      onChange={(e) =>
                        setMeasurements({
                          ...measurements,
                          topOfChestToCrotch: e.target.value,
                        })
                      }
                    />

                    <Form.Label className="form-label">
                      Bicep Width (IN)
                    </Form.Label>
                    <Form.Control
                      type="number"
                      onWheel={(e) => e.target.blur()}
                      value={measurements.bicepWidth || ""}
                      placeholder="Enter Bicep Width"
                      onChange={(e) =>
                        setMeasurements({
                          ...measurements,
                          bicepWidth: e.target.value,
                        })
                      }
                    />
                  </>
                )}

                <Form.Label className="form-label">Waist Width (IN)</Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Enter Waist Width"
                  value={measurements.waistWidth || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      waistWidth: e.target.value,
                    })
                  }
                />

                <Form.Label className="form-label">
                  Bottom Hem Sweep (IN)
                </Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  value={measurements.bottomHemSweep || ""}
                  placeholder="Enter Bottom Hem Sweep"
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      bottomHemSweep: e.target.value,
                    })
                  }
                />

                <Form.Label className="form-label">Hip Width (IN)</Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  value={measurements.hipWidth || ""}
                  placeholder="Enter Hip Width"
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      hipWidth: e.target.value,
                    })
                  }
                />

                <Form.Label className="form-label">Rise (IN)</Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  value={measurements.rise || ""}
                  placeholder="Enter Rise"
                  onChange={(e) =>
                    setMeasurements({ ...measurements, rise: e.target.value })
                  }
                />

                <Form.Label className="form-label">Thigh Width (IN)</Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  value={measurements.thighWidth || ""}
                  placeholder="Enter Thigh Width"
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      thighWidth: e.target.value,
                    })
                  }
                />

                {!attributes.areShorts && (
                  <>
                    <Form.Label className="form-label">
                      Calf Width (IN)
                    </Form.Label>
                    <Form.Control
                      type="number"
                      onWheel={(e) => e.target.blur()}
                      placeholder="Enter Calf Width"
                      value={measurements.calf || ""}
                      onChange={(e) =>
                        setMeasurements({
                          ...measurements,
                          calf: e.target.value,
                        })
                      }
                    />
                  </>
                )}

                <Form.Label className="form-label">Inseam (IN)</Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  value={measurements.inseam || ""}
                  placeholder="Enter Inseam"
                  onChange={(e) =>
                    setMeasurements({ ...measurements, inseam: e.target.value })
                  }
                />

                <Form.Label className="form-label">Outseam (IN)</Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  value={measurements.outseam || ""}
                  placeholder="Enter Outseam"
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      outseam: e.target.value,
                    })
                  }
                />

                <Form.Label className="form-label">
                  Garmet Length (IN)
                </Form.Label>
                <Form.Control
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  value={measurements.garmetLength || ""}
                  placeholder="Enter Garmet Length"
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      garmetLength: e.target.value,
                    })
                  }
                />
              </>
            ) : null}
          </div>

          <div className="right">
            <h1 className="category-title">{attributes.category} </h1>
            <div className="nav-btns">
              <div className="btn-parent">
                <button variant="primary" onClick={() => incrementFormPage(-1)}>
                  Back
                </button>
              </div>
              <div className="btn-parent">
                <button variant="primary" onClick={() => submitClothing()}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SecondaryForm;
