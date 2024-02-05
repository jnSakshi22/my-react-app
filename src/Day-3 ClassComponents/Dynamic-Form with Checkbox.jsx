import { Component } from "react";

class DynamicForm extends Component {
  state = {
    uName: "",
    uPassword: "",
    uCity: "",
    uCountry: "",
    eula: false,
  };

  onInputChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });

    this.setState({ [name]: value });
  };

  onInputChangeV2 = (e) => {
    const { name, value, type, checked } = e.target;

    /* if (type === "checkbox") {
      this.setState({ [name]: checked });
    } else {
      this.setState({ [name]: value });
    } */

    const newState = { [name]: value }; // {eula:"on"}
    if (type === "checkbox") {
      newState[name] = checked; // uName: true
    }

    this.setState(newState);
  };

  onCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    console.log({ name, value, checked });

    this.setState({ [name]: checked });
  };

  render() {
    const { uName, uPassword, uCity, uCountry, eula } = this.state;
    console.log("State: ", this.state);
    return (
      <div>
        <div className="form-element">
          <p>Name</p>
          <input
            type="text"
            name="uName"
            value={uName}
            onChange={this.onInputChangeV2}
          />
        </div>
        <div className="form-element">
          <p>Password</p>
          <input
            type="text"
            name="uPassword"
            value={uPassword}
            onChange={this.onInputChangeV2}
          />
        </div>
        <div className="form-element">
          <p>City</p>
          <input
            type="text"
            name="uCity"
            value={uCity}
            onChange={this.onInputChangeV2}
          />
        </div>
        <div className="form-element">
          <p>Country</p>
          <input
            type="text"
            name="uCountry"
            value={uCountry}
            onChange={this.onInputChangeV2}
          />
        </div>

        <div className="form-element">
          <p>EULA</p>
          <input
            type="checkbox"
            name="eula"
            value={eula}
            onChange={this.onInputChangeV2}
          />
        </div>
      </div>
    );
  }
}

export default DynamicForm;
