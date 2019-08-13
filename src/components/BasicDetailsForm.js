import React, { useState } from "react";
import { Button } from "reactstrap";
import PrimaryApplicant from "./PrimaryApplicant";
import DependantForm from "./DependantForm";
import PictureUpload from "./PictureUpload";
import Payment from "./Payment";
import axios from "axios";

const BasicDetailsForm = props => {
  const defaultState = {
    dependants: [],
    page: 1,
    btnText: "Save & Continue",
    formData: {}
  };
  let count = 0;
  const [formState, setState] = useState(defaultState);

  const next = () => {
    if (formState.page === 1) {
      let updateDependants = formState.dependants;
      updateDependants.push(++count);
      return setState({
        ...formState,
        dependants: updateDependants,
        page: 2,
        btnText: "Next"
      });
    }

    if (formState.page === 2) {
      return setState({
        ...formState,
        page: 3
      });
    }

    if (formState.page === 3) {
      return setState({
        ...formState,
        page: 4,
        btnText: "Finish"
      });
    }

    if (formState.btnText === "Finish") {
      submitData(formState.formData);
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

  const handleApplicantChange = input => event => {
    event.preventDefault();
    const { formData } = { ...formState };
    const current = formData;
    const { value } = event.target;
    current[input] = value;
    setState({ ...formState, formData: current });
  };

  const captureImage = imageBits => {
    const { formData } = { ...formState };
    const current = formData;
    current["encoded_image"] = imageBits;
    setState({ ...formState, formData: current });
  };

  const submitData = data => {
    axios
      .post(
        "https://us-central1-runfree-test.cloudfunctions.net/register-user",
        { ...data }
      )
      .then(res => {
        console.log(res);
      });
  };

  const handleUpload = fileName => {
    const { formData } = { ...formState };
    const current = formData;
    current["user_img"] = fileName;
    setState({...formState, formData: current});
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
        {formState.page === 1 ? (
          <PrimaryApplicant
            applicant={formState}
            handleApplicantChange={handleApplicantChange}
          />
        ) : null}
        {formState.page === 2 ? (
          <div>
            {formState.dependants.map((item, index) => (
              <DependantForm key={index} />
            ))}
            {formState.dependants.length <= 2 ? (
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
            ) : null}
            {formState.dependants.length === 0 ||
            formState.dependants.length >= 2 ? (
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
            ) : null}
          </div>
        ) : null}
        {formState.page === 3 ? (
          <PictureUpload capture={captureImage} uploadHandler={handleUpload} />
        ) : null}
        {formState.page === 4 ? <Payment /> : null}
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
