import React from "react";

const Payments = props => {
  return (
      <div className="form-title about-form" style={{ color: "white" }}>
        <div className="text-center">
          <h4
            style={{
              color: "wheat",
              fontSize: "14px",
              marginBottom: "10px"
            }}
          >
            Make Payment via MTN Mobile Money
          </h4>
        </div>
        <ul className="list-group" style={{color: "black"}}>
            <li className="list-group-item">#1. Dail *170# and send</li>
            <li className="list-group-item">#2. Select option " 1 "</li>
            <li className="list-group-item">#3. Select option " 1 "</li>
            <li className="list-group-item">#4. Enter Amount </li>
        </ul>
      </div>
  );
};

export default Payments;
