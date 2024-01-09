import { Component } from "react";

class InputForm extends Component {
  render() {
    return (
      <div>
        <h2>
          <strong>Registration Form</strong>
        </h2>
        <div>
          <h4>
            <strong>Full Name</strong>
          </h4>
          <input type="text" />
        </div>
        <div>
          <h4>
            <strong>Email</strong>
          </h4>
          <input type="text" />
        </div>
        <div>
          <h4>
            <strong>Password</strong>
          </h4>
          <input type="password" />
        </div>
        <div>
          <h4>
            <strong>Gender</strong>
          </h4>
          <input type="radio" name="male" />
          <input type="radio" name="female" />
        </div>
        <div>
          <h4>
            <strong>Interests</strong>
          </h4>
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
        </div>
        <div>
          <h4>
            <strong>Age</strong>
          </h4>
          <input type="range" />
        </div>
        <div>
          <h4>
            <strong>Date Of Birth</strong>
          </h4>
          <input type="date" />
        </div>
      </div>
    );
  }
}

export default InputForm;
