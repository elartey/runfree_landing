import React from "react";

class DependantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleDependants = this.handleDependants.bind(this);
  }

  handleDependants  = input => event => {
    const { value } = event.target;
    this.setState({ ...this.state, [input]: value });
    const itemList = Object.keys(this.state).filter(item =>
      item.includes(this.props.formId)
    );

    if (itemList.length === 4) {
      const tempObj = {};
      itemList.forEach(item => (tempObj[item] = this.state[item]));
      this.props.handleDependantChange(tempObj, this.props.formId);
    }
  };

  render() {
    return (
      <div>
        <div className="text-left">
          <h4
            style={{
              color: "#ecae39",
              fontSize: "14px",
              marginBottom: "10px"
            }}
          >
            DEPENDANT
          </h4>
        </div>
        <div className="v2-about-input">
          <input
            name={"dependant_first_name" + this.props.formId}
            id={"dependant_first_name" + this.props.formId}
            type="text"
            placeholder="First Name"
            onChange={this.handleDependants(
              `dependant_first_name${this.props.formId}`
            )}
          />
        </div>
        <div className="v2-about-input mr0">
          <input
            name={"dependant_last_name" + this.props.formId}
            id={"dependant_last_name" + this.props.formId}
            type="text"
            placeholder="Last Name"
            onChange={this.handleDependants(
              `dependant_last_name${this.props.formId}`
            )}
          />
        </div>
        <div className="v2-about-input mr0">
          <input
            name={"dependant_dob" + this.props.formId}
            id={"dependant_dob" + this.props.formId}
            type="text"
            placeholder="Date of Birth e.g 01/01/1990"
            onChange={this.handleDependants(
              `dependant_dob${this.props.formId}`
            )}
          />
        </div>
        <div className="v2-about-input pl-3">
          <div className="v2-about-select">
            <select
              name={"dependant_gender" + this.props.formId}
              onChange={this.handleDependants(
                `dependant_gender${this.props.formId}`
              )}
              defaultValue={"Select gender"}
              style={{width: "104%"}}
            >
              <option value="Select gender" disabled>Select gender</option>
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
