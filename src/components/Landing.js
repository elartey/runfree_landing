import React from "react";
import BasicDetailsForm from "./BasicDetailsForm";
import TermsModal from "./TermsModal";
import { Button } from "reactstrap";

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
      <div>
      <section className="home-area v3">
        <div className="Modern-Slider">
          <div className="item">
            <div className="img-fill">
              <img src="img/v3home.png" alt="jigsawlab" />
              <div className="info">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6 slider-content-area text-left">
                      <div className="v3 welcome-text">
                        <h1>Day Kare Ambulance</h1>
                        <h2>Health Care Solutions</h2>
                        <h4>
                          I hereby apply for membership of my family in the Day
                          Kare Ambulance Subscription Program. I understand that
                          the enclosed annual fee will only provide coverage for
                          me. and my spouse and any dependent children that are
                          6 years of age or older residing at my residence I
                          will also need to obtain a membership plan as well.
                          Membership will be provided to additional family
                          members at a discounted rate of 20%...
                        </h4>
                        <Button className="read-more rounded" color="danger" onClick={this.toggle}>Read Terms & Conditions</Button>
                      </div>
                    </div>
                    <BasicDetailsForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TermsModal modal={this.state.modal} toggle={this.toggle} className="modal-diaglog-centered" />
    </div>
    );
  }
}

export default Landing;
