import React from "react";

const PrimaryApplicant = props => {
  return (
    <div>
      <div className=" text-left">
        <h4
          style={{
            color: "#ecae39",
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
          onChange={props.handleApplicantChange("first_name")}
        />
      </div>
      <div className="v2-about-input mr0">
        <input
          type="text"
          name="last_name"
          id="lastName"
          placeholder="Last Name"
          onChange={props.handleApplicantChange("last_name")}
        />
      </div>
      <div className="v2-about-input">
        <div className="v2-about-select">
          <select
            name="applicant_gender"
            onChange={props.handleApplicantChange("applicant_gender")}
          >
            <option value="">{" "}</option>
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
          onChange={props.handleApplicantChange("address")}
        />
      </div>
      <div className="v2-about-input">
        <input
          type="text"
          name="email"
          id="emailAddress"
          placeholder="Email"
          onChange={props.handleApplicantChange("email")}
        />
      </div>
      <div className="v2-about-input mr0">
        <input
          type="text"
          name="member_id"
          id="memberId"
          placeholder="Member ID"
          onChange={props.handleApplicantChange("member_id")}
        />
      </div>
      <div className="v2-about-input">
        <input
          type="text"
          name="phone_number"
          id="phoneNumber"
          placeholder="Phone Number"
          onChange={props.handleApplicantChange("phone_number")}
        />
      </div>
      <div className="v2-about-input mr0">
        <input
          type="text"
          name="insurance_company"
          id="insuranceCompany"
          placeholder="Insurance Company"
          onChange={props.handleApplicantChange("insurance_company")}
        />
      </div>
      <div className="v2-about-input" />
      <div className="v2-about-input mr0" />
      <div className=" text-left">
        <h4
          style={{
            color: "#ecae39",
            fontSize: "14px",
            marginBottom: "7px"
          }}
        >
          SPOUSE
        </h4>
      </div>
      <div className="v2-about-input">
        <input
          name="spouse_first_name"
          type="text"
          placeholder="First Name"
          onChange={props.handleApplicantChange("spouse_first_name")}
        />
      </div>
      <div className="v2-about-input mr0">
        <input
          name="spouse_last_name"
          type="text"
          placeholder="Last Name"
          onChange={props.handleApplicantChange("spouse_last_name")}
        />
      </div>
      <div className="v2-about-input mr0">
        <div className="v2-about-select">
          <select
            name="spouse_gender"
            onChange={props.handleApplicantChange("spouse_gender")}
          >
            <option value="">{" "}</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PrimaryApplicant;
