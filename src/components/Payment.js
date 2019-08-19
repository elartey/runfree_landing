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
        <ul className="list-group" style={{color: "black", textAlign: "left"}}>
            <li className="list-group-item">#1. Dail *170# and send</li>
            <li className="list-group-item">#2. Select option " 1 " "Transfer Money"</li>
            <li className="list-group-item">#3. Next, select option " 1 " "MoMo User"</li>
            <li className="list-group-item">#4. Enter mobile number (024769228) </li>
            <li className="list-group-item">#5. Enter mobile number (024769228) again to confirm </li>
            <li className="list-group-item">#6. Enter amount</li>
            <li className="list-group-item">#7. Enter reference (A.R.A.M Registration - Member ID) </li>
        </ul>
        <div className="v2-about-input pt-4">
        <input
          type="text"
          name="reference_id"
          id="reference_id"
          placeholder="Reference ID"
          onChange={props.handlePaymentReference("reference_id")}
        />
      </div>
      </div>
  );
};

export default Payments;
