import React from "react";
import { Input, Col, FormGroup, Container } from "reactstrap";

class DependantForm extends React.Component {
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

        <FormGroup row>
          <Col sm={6}>
            <Input
              type="text"
              name="dob"
              id="dob"
              placeholder="D.O.B e.g. 12/01/2001"
            />
          </Col>
          <Col sm={6}>
            <Input type="select" name="gender" id="lastName" multiple />
          </Col>
        </FormGroup>
      </Container>
    );
  }
}

export default DependantForm;
