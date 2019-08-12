import React from "react";
import terms from "../assets/terms";

class Terms extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = React.createRef();
    this.launchModal = this.launchModal.bind(this);
  }

  launchModal = () => {
    const modal = this.openModal.current;
    modal.setAttribute("style", { display: "none" });
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <div className="row d-flex justify-content-center">
              <img
                src="img/logo.png"
                style={{ height: 72 + "px", width: "auto" }}
                alt="IE6 preview"
              />{" "}
            </div>
            <div className="row d-flex justify-content-center pt-3">
            <h4>THIS IS NOT AN INSURANCE PLAN</h4> <br />
            </div>
            <br />
            <h4
              style={{
                background: "red",
                color: "white",
                textAlign: "left"
              }}
              className="rounded pl-2"
            >
              {" "}
              Membership Application
            </h4>{" "}
            <br />
            <p style={{fontSize: "1.2rem"}} className="font-weight-light"> {terms.declaration} </p> <br />
            <h4
              style={{
                background: "red",
                color: "white",
                textAlign: "left"
              }}
              className="rounded pl-2"
            >
              {" "}
              Medical Authorization / Assignment of Benefits{" "}
            </h4>
            <br />
            <p style={{fontSize: "1.2rem"}} className="font-weight-light">{terms.benefits}</p> <br />
            <h4
              style={{
                background: "red",
                color: "white",
                textAlign: "left"
              }}
              className="rounded pl-2"
            >
              {" "}
              Lifetime Signature Authorization
            </h4>
            <br />
            <p style={{fontSize: "1.2rem"}} className="font-weight-light">
              To facilitate processing, I authorize the release to Day Kare
              Ambulance Service/EMS, and the GAHS or other insurer of any
              medical information or documentation held by anyone necessary to
              process a claim whether in the past, now or in the future, and
              further assign and authorize such payments to Day Kare Ambulance
              Service/EMS. I permit a copy of this authorization to be used in
              place of the original. The Day Kare Ambulance Subscription Program
              is not insurance. My membership will not apply if transported by
              an Ambulance Company other than Day Kare Ambulance Service/EMS or
              if I’m transported to any hospital other than a GAHS facility in
              my coverage area.
            </p>{" "}
            <br />
            <p style={{fontSize: "1.2rem"}} className="font-weight-light">
              I understand that Day Kare Transport provides medically necessary
              ambulance transportation and that any violations of the terms of
              this agreement may result in immediate cancellation of my
              membership or other penalty. I also understand that this
              membership is non-refundable and non-transferable.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Terms;
