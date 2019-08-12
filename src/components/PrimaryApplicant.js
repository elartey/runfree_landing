import React from "react";

const PrimaryApplicant = props => {
  return (
    <div>
      <div className=" text-left">
        <h4
          style={{
            color: "wheat",
            fontSize: "14px",
            marginBottom: "7px"
          }}
        >
          APPLICANT
        </h4>
      </div>
      <div className="v2-about-input">
        <input
          type="text"
          name="first_name"
          id="firstName"
          placeholder="First Name"
        />
      </div>
      <div className="v2-about-input mr0">
        <input
          type="text"
          name="last_name"
          id="lastName"
          placeholder="Last Name"
        />
      </div>
      <div className="v2-about-input">
        <div className="v2-about-select">
          <select>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
      <div className="v2-about-input mr0">
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Residential Address"
        />
      </div>
      <div className="v2-about-input">
        <input type="text" name="email" id="emailAddress" placeholder="Email" />
      </div>
      <div className="v2-about-input mr0">
        <input type="text" name="tax-id" id="taxId" placeholder="T.I.N #" />
      </div>
      <div className="v2-about-input">
        <input
          type="text"
          name="phone_number"
          id="phoneNumber"
          placeholder="Phone Number"
        />
      </div>
      <div className="v2-about-input mr0">
        <input
          type="text"
          name="insurance_company"
          id="insuranceCompany"
          placeholder="Insurance Company"
        />
      </div>
      <div className="v2-about-input">
        <input
          type="text"
          name="member_id"
          id="memberId"
          placeholder="Member ID"
        />
      </div>
      <div className="v2-about-input mr0" />
      <div className=" text-left">
        <h4
          style={{
            color: "wheat",
            fontSize: "14px",
            marginBottom: "7px"
          }}
        >
          SPOUSE
        </h4>
      </div>
      <div className="v2-about-input">
        <input name="spouse_first_name" type="text" placeholder="First Name" />
      </div>
      <div className="v2-about-input mr0">
        <input name="spouse_last_name" type="text" placeholder="Last Name" />
      </div>
      <div className="v2-about-input mr0">
        <div className="v2-about-select">
          <select name="spouse_gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PrimaryApplicant;
