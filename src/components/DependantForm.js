import React from "react";
import { Input, Col, FormGroup, Container } from "reactstrap";

class DependantForm extends React.Component {
  render() {
    return (
      <div>
        <div className=" text-left">
          <h4
            style={{
              color: "wheat",
              fontSize: "14px",
              marginBottom: "10px"
            }}
          >
            DEPENDANT
          </h4>
        </div>
        <div className="v2-about-input">
          <input
            name="spouse[first_name]"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="v2-about-input mr0">
          <input name="spouse[last_name]" type="text" placeholder="Last Name" />
        </div>
        <div className="v2-about-input mr0">
          <input
            name="spouse[dob]"
            type="text"
            placeholder="Date of Birth e.g 01/01/1990"
          />
        </div>
        <div className="v2-about-input pl-3">
          <div className="v2-about-select">
            <select name="spouse[gender]">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default DependantForm;
