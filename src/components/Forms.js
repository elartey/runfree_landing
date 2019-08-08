import React from "react";
import { Form, Label, Container } from "reactstrap";
import BasicDetailsForm from "./BasicDetailsForm";
import DependantForm from "./DependantForm";
import PictureUpload from "./PictureUpload";

const Forms = props => {
  return (
    <Container>
      <Form>
        {props.showPrimary ? (
          <div>
            <Label for="primaryApplicant" className="small">
              Primary Applicant
            </Label>
            <BasicDetailsForm isSpouse={false} />{" "}
            <Label for="spouse" className="small">
              Spouse
            </Label>
            <BasicDetailsForm isSpouse={true} />
          </div>
        ) : null}

        {props.showDependant ? (
          <div>
            {props.dependants.map(item => (
              <DependantForm key={item} />
            ))}
          </div>
        ) : null}

        {props.showUpload ? (
          <div>
            <p>Image Upload</p>
            <PictureUpload />
          </div>
        ) : null}

        {props.showPayment ? (
          <div>
            <p>Payment Page</p>
          </div>
        ) : null}
      </Form>
    </Container>
  );
};

export default Forms;
