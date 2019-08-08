import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container
} from "reactstrap";
import Forms from "./Forms";

const RegistrationModal = props => {
  const defaultState = {
    showPrimary: true,
    showDependant: false,
    dependants: [],
    page: 1,
    showUpload: false,
    showPayment: false,
    title: "Applicant Details"
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
        title: "Add Dependant"
      });
    }

    if (formState.page === 2) {
      return setState({
        ...formState,
        showDependant: false,
        page: 3,
        showUpload: true,
        title: "Upload Picture"
      });
    }

    if (formState.page === 3) {
      return setState({
        ...formState,
        showUpload: false,
        showPayment: true,
        page: 0,
        title: "Payments"
      });
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
    const updatedCount = formState.dependants;
    updatedCount.shift();
    setState({ ...formState, dependants: updatedCount });
  };

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
          {formState.title}
        </ModalHeader>
        <ModalBody>
          <Forms
            showPrimary={formState.showPrimary}
            dependants={formState.dependants}
            showDependant={formState.showDependant}
            showUpload={formState.showUpload}
            showPayment={formState.showPayment}
          />
        </ModalBody>
        <ModalFooter>
          {formState.page === 2 ? (
            <div>
              <Button outline color="danger" onClick={addDependant}>
                Add
              </Button>{" "}
              <Button outline color="danger" onClick={removeDependant}>
                Remove
              </Button>
            </div>
          ) : null}
          {formState.page !== 0 ? (
            <Button color="danger" onClick={next}>
              Next
            </Button>
          ) : (
            <Button
              color="danger"
              onClick={event => {
                props.toggle();
                reset();
              }}
            >
              Done
            </Button>
          )}
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default RegistrationModal;
