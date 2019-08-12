import React, { useState } from "react";
import { Button } from "reactstrap";
import PrimaryApplicant from "./PrimaryApplicant";
import DependantForm from "./DependantForm";

const BasicDetailsForm = props => {
  const defaultState = {
    showPrimary: true,
    showDependant: false,
    dependants: [],
    page: 1,
    showUpload: false,
    showPayment: false,
    title: "Applicant Details",
    btnText: "Save & Continue"
  };
  let count = 0;
  const [formState, setState] = useState(defaultState);

  const next = () => {
    if (formState.page === 1) {
      let updateDependants = formState.dependants;
      updateDependants.push(++count);
      return setState({
        ...formState,
        showPrimary: false,
        showDependant: true,
        dependants: updateDependants,
        page: 2,
        title: "Add Dependant",
        btnText: "Next"
      });
    }

    if (formState.page === 2) {
      return setState({
        ...formState,
        showDependant: false,
        page: 3,
        showUpload: true,
        title: "Upload Picture",
        btnText: "Next"
      });
    }

    if (formState.page === 3) {
      return setState({
        ...formState,
        showUpload: false,
        showPayment: true,
        page: 0,
        title: "Payments",
        btnText: "Finish"
      });
    }

    if (formState.btnText === "Finish") {
      reset();
    }
  };

  const reset = () => {
    setState(Object.assign(defaultState));
  };

  const addDependant = () => {
    const newCount = formState.dependants;
    newCount.push(++count);
    setState({ ...formState, dependants: newCount });
  };

  const removeDependant = () => {
    if (formState.dependants <= 1) {
      return;
    }
    const updatedCount = formState.dependants;
    updatedCount.shift();
    setState({ ...formState, dependants: updatedCount });
  };

  return (
    <div
      className="col-sm-6 v3-homeform"
      style={{ paddingTop: "135px !important" }}
    >
      <div className="about-form">
        <div className="form-title text-center">
          <h2>
            Membership <span>Application </span>
          </h2>
        </div>
        {formState.page === 1 ? <PrimaryApplicant /> : null}
        {formState.page === 2 ? (
          <div>
            {formState.dependants.map((item, index) => (
              <DependantForm key={index} />
            ))}
          </div>
        ) : null}
        {formState.page === 2 ? (
          <div>
            <div className="mr0 float-left mb-4" style={{ width: "30%" }}>
              <Button
                color="danger"
                className="btn-lg"
                onClick={addDependant}
                block
              >
                Add
              </Button>
            </div>
            <div className="mr0 float-right mb-4" style={{ width: "30%" }}>
              <Button
                color="danger"
                className="btn-lg"
                onClick={removeDependant}
                block
              >
                Remove
              </Button>
            </div>
          </div>
        ) : null}
        <div className="mr0 mt-4">
          <Button color="danger btn-lg" onClick={next} block>
            {formState.btnText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BasicDetailsForm;
