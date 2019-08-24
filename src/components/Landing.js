import React from "react";
import BasicDetailsForm from "./BasicDetailsForm";
import TermsModal from "./TermsModal";
import { Button } from "reactstrap";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
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
      <div style={{ paddingTop: "3rem" }}>
        <section className="home-area v3">
          <div>
            <div className="item">
              <div className="img-fill">
                <div className="info" style={{paddingTop: "8rem"}}>
                  <div className="container">
                    <div className="row">
                      <div className="col slider-content-area text-left">
                        <div className="v3 welcome-text">
                          <h1 className="font-weight-normal">
                            Day Kare Ambulance
                            <br />
                          </h1>
                          <h2>A.R.A.M</h2> <br />
                          <h2>Health Care Solutions</h2>
                          <h4 className="font-weight-light">
                            I hereby apply for membership of my family in the
                            Day Kare Ambulance Subscription Program. I
                            understand that the enclosed annual fee will only
                            provide coverage for me. and my spouse and any
                            dependent children that are 6 years of age or older
                            residing at my residence I will also need to obtain
                            a membership plan as well. Membership will be
                            provided to additional family members at a
                            discounted rate of 20% ...
                          </h4>
                          <Button
                            className="read-more rounded btn-lg"
                            color="danger"
                            onClick={this.toggle}
                          >
                            Read Terms & Conditions
                          </Button>
                        </div>
                      </div>
                      <BasicDetailsForm formData={this.state.formData} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <TermsModal
          modal={this.state.modal}
          toggle={this.toggle}
          className="modal-diaglog-centered"
        />
      </div>
    );
  }
}

export default Landing;
