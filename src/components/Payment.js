import React from "react";

const Payments = props => {
  return (
    <div className="form-title about-formV2" style={{ color: "white" }}>
      <div className="text-center mb-5">
        <h4
          style={{
            color: "#ecae39",
            fontSize: "14px",
            marginBottom: "10px"
          }}
        >
          Make Payment via MTN Mobile Money
        </h4>
      </div>
      <ul className="list-group" style={{ color: "black", textAlign: "left" }}>
        <li className="list-group-item">#1. Dail *170# and send</li>
        <li className="list-group-item">
          #2. Select option " 1 " "Transfer Money"
        </li>
        <li className="list-group-item">
          #3. Next, select option " 1 " "MoMo User"
        </li>
        <li className="list-group-item">
          #4. Enter mobile number (024769228){" "}
        </li>
        <li className="list-group-item">
          #5. Enter mobile number (024769228) again to confirm{" "}
        </li>
        <li className="list-group-item">#6. Enter amount 60 GHS</li>
        <li className="list-group-item">#7. Enter reference text</li>
        <li className="list-group-item">
          #8. Please enter the mobile money transaction id below. You can find this in the transaction SMS.{" "}
        </li>
      </ul>
      <p className="pt-3" style={{ color: "black", textAlign: "left" }}>**Note: Please provide either a 3rd reseller name or BDM details. <br /> Failure to provide then mobile money transaction id will render registration incomplete.</p>
      <div className="row">
        <div className="v2-about-input pt-4 col">
          <input
            type="text"
            name="reference_id"
            id="reference_id"
            placeholder="Transaction ID"
            onChange={props.handlePaymentReference("reference_id")}
            required
          />
        </div>
        <div className="v2-about-input pt-4 col">
          <input
            type="text"
            name="third_party_name"
            id="third_party_name"
            placeholder="** 3rd Party Reseller"
            onChange={props.handlePaymentReference("third_party_name")}
          />
        </div>
      </div>
      <div className="row">
        <div className="v2-about-input pt-4 col">
          <input
            type="text"
            name="bdm_name"
            id="bdm_name"
            placeholder="BDM First Name"
            onChange={props.handlePaymentReference("bdm_name")}
          />
        </div>
        <div className="v2-about-input pt-4 col">
          <input
            type="text"
            name="bdm_id"
            id="bdm_id"
            placeholder="BDM Staff ID"
            onChange={props.handlePaymentReference("bdm_id")}
          />
        </div>
      </div>
    </div>
  );
};

export default Payments;
