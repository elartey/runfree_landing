import React, { Fragment } from "react";
import { Button, Container, Col, Row } from "reactstrap";
import RegistrationModal from "./RegistrationModal";
import daykarelogo from "../static/daykarelogo.png";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    return (
      <Fragment>
        <Container fluid className="align-top">
          <Row>
            <Col>
              <img
                src={daykarelogo}
                alt="DayKare Logo"
                width="300"
                height="250"
                className="ml-5"
              />
              <p className="text-myted small text-center pt-2 ml-5">
                * By clicking <em>Sign Up</em> you agree to the terms and conditions of the membership
                application.
              </p>
            </Col>
          </Row>
          <div style={{marginLeft: 47 + "%"}}>
          <Button
                color="danger"
                className="btn-danger"
                onClick={this.toggle}
              >
                Sign Up
              </Button>
          </div>
        </Container>
        <RegistrationModal
          modal={this.state.modal}
          toggle={this.toggle}
          className="modal-dialog-centered"
        />
      </Fragment>
    );
  }
}

export default Landing;
