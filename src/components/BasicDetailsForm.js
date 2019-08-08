import React from "react";
import { Input, Col, FormGroup, Container } from "reactstrap";

class BasicDetailsForm extends React.Component {
  render() {
    return (
      <div class="col-sm-6 v3-homeform" style={{paddingTop: "135px !important;"}}>
        <div class="about-form">
            <div class="form-title text-center">
                <h2>Membership <span>Application </span> 1/4</h2>
            </div>
            <div class=" text-left">
                <h2 style={{color: "wheat", fontSize: "16px", marginBottom: "7px" }}>APPLICANT
                </h2>
            </div>
            <div class="v2-about-input">
                <input type="text" name="first_name" id="firstName" placeholder="First Name" />
            </div>
            <div class="v2-about-input mr0">
                <input type="text" name="last_name" id="lastName" placeholder="Last Name"/>
            </div>
            <div class="v2-about-input">
                <div class="v2-about-select">
                    <select>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
            </div>
            <div class="v2-about-input mr0">
                <input type="text" name="address" id="address" placeholder="Residential Address" />
            </div>
            <div class="v2-about-input">
                <input type="text"  name="email" id="emailAddress" placeholder="Email" />
            </div>
            <div class="v2-about-input mr0">
                <input type="text"  name="tax-id" id="taxId" placeholder="T.I.N #" />
            </div>
            <div class="v2-about-input">
                <input type="text"  name="phone_number" id="phoneNumber" placeholder="Phone Number" />
            </div>
            <div class="v2-about-input mr0">
                <input type="text"   name="insurance_company" id="insuranceCompany" placeholder="Insurance Company" />
            </div>
            <div class="v2-about-input">
                <input type="text" name="member_id" id="memberId" placeholder="Member ID" />
            </div>
            <div class="v2-about-input mr0"></div>
            <div class=" text-left">
                <h2 style={{color: "wheat", fontSize: "16px", marginBottom: "7px"}}>SPOUSE</h2>
            </div>
            <div class="v2-about-input">
                <input type="text" placeholder="First Name" />
            </div>
            <div class="v2-about-input mr0">
                <input type="text" placeholder="Last Name" />
            </div>
            <div class="v2-about-input">
                <input type="text" placeholder="Last Name" />
            </div>
            <div class="v2-about-input mr0">
                <div class="v2-about-select">
                    <select>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
            </div>
            <div class="v2-about-submit">
                <input type="submit" value="Save & Continue" />
            </div>
        </div>
    </div>
    );
  }
}

export default BasicDetailsForm;
