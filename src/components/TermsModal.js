import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container
} from "reactstrap";
import Terms from "./Terms";

const TermsModal = props => {

  return (
    <Container>
      <Modal
        isOpen={props.modal}
        toggle={props.toggle}
        className={props.className}
      >
        <ModalHeader
          toggle={props.toggle}
          className="text-uppercase font-weight-light"
        >
          Terms and Conditions
        </ModalHeader>
        <ModalBody>
        <Terms />
        </ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            onClick={event => {
              props.toggle();
            }}
          >
            Accept Terms & Conditions
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default TermsModal;
