import React from "react";
import { Input, Col, FormGroup, Container } from "reactstrap";

class BasicDetailsForm extends React.Component {
  render() {
    return (
      <Container>
        <FormGroup row>
          <Col sm={6}>
            <Input
              type="text"
              name="first_name"
              id="firstName"
              placeholder="First Name"
            />
          </Col>
          <Col sm={6}>
            <Input
              type="text"
              name="last_name"
              id="lastName"
              placeholder="Last Name"
            />
          </Col>
        </FormGroup>

        {!this.props.isSpouse ? (
          <div>
            <FormGroup row>
              <Col sm={6}>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                />
              </Col>
              <Col sm={6}>
                <Input
                  type="email"
                  name="email"
                  id="emailAddress"
                  placeholder="Email"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col sm={6}>
                <Input
                  type="text"
                  name="tax-id"
                  id="taxId"
                  placeholder="T.I.N #"
                />
              </Col>
              <Col sm={6}>
                <Input
                  type="text"
                  name="phone_number"
                  id="phoneNumber"
                  placeholder="Phone Number"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={6}>
                <Input
                  type="text"
                  name="insurance_company"
                  id="insuranceCompany"
                  placeholder="Insurance Company"
                />
              </Col>
              <Col sm={6}>
                <Input
                  type="text"
                  name="member_id"
                  id="memberId"
                  placeholder="Member ID"
                />
              </Col>
            </FormGroup>
          </div>
        ) : (
          <div>
            <FormGroup row>
              <Col sm={12}>
                <Input
                  type="email"
                  name="email"
                  id="emailAddress"
                  placeholder="Email"
                />
              </Col>
            </FormGroup>
          </div>
        )}
      </Container>
    );
  }
}

export default BasicDetailsForm;
