import { Component } from "react";

class DynamicForm extends Component {
  state = {
    uName: "",
    uPassword: "",
    uCity: "",
  };

  onInputChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });

    this.setState({ [name]: value });
  };

  render() {
    const { uName, uPassword, uCity } = this.state;
    console.log("State: ", this.state);
    return (
      <div>
        <div className="form-element">
          <p>Name</p>
          <input
            type="text"
            name="uName"
            value={uName}
            onChange={this.onInputChange}
          />
        </div>
        <div className="form-element">
          <p>Password</p>
          <input
            type="text"
            name="uPassword"
            value={uPassword}
            onChange={this.onInputChange}
          />
        </div>
        <div className="form-element">
          <p>City</p>
          <input
            type="text"
            name="uCity"
            value={uCity}
            onChange={this.onInputChange}
          />
        </div>
      </div>
    );
  }
}

export default DynamicForm;
