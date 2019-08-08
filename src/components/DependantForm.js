import React from "react";

class DependantForm extends React.Component {
  render() {
    return (
      <div class="col-sm-6 v3-homeform" style={{paddingTop: "135px !important;"}}>
        <div class="about-form">
            <div class="form-title text-center">
                <h2>Membership <span>Application </span> 2/4</h2>
            </div>
            <div class=" text-left">
                <h2 style={{color: "wheat", fontSize: "16px", marginBottom: "7px" }}>DEPENDANT</h2>
            </div>
            <div class="v2-about-input">
                <input type="text" name="first_name" id="firstName" placeholder="First Name" />
            </div>
            <div class="v2-about-input mr0">
                <input type="text" name="last_name" id="lastName" placeholder="Last Name"/>
            </div>
            <div class="v2-about-input">
                <input  type="text" name="dob" id="dob" placeholder="D.O.B e.g. 12/01/2001" />
            </div>
            <div class="v2-about-input mr0">
                <div class="v2-about-select">
                    <select name="gender">
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

export default DependantForm;
