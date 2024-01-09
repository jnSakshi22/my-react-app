import { Component } from "react";
import "./style.css";
import Modal from "react-modal";

const interestsList = ["Sports", "Music", "Reading", "Coding"];

class InputForm extends Component {
  state = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    submit: false,
    range_value: 1,
    show: false,
    gender: "",
    interests_data: [],
    date_value: "",
  };

  onInputChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });

    this.setState({ [name]: value });
  };

  setGender = (e) => {
    this.setState({ gender: e.target.value });
  };

  onSubmitBtn = () => {
    const { fName, lName, email, password } = this.state;
    const isValid =
      fName !== "" &&
      lName !== "" &&
      email !== "" &&
      password !== "" &&
      password.length > 8;

    this.setState({ submit: !this.state.submit, show: isValid });
  };

  setInterests = (val) => {
    const { interests_data } = this.state;
    const updatedInterests = interests_data.includes(val)
      ? interests_data.filter((item) => item !== val)
      : [...interests_data, val];

    this.setState({ interests_data: updatedInterests });
  };

  closeModal = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const {
      fName,
      lName,
      email,
      password,
      submit,
      range_value,
      show,
      gender,
      interests_data,
      date_value,
    } = this.state;

    console.log("State: ", this.state);

    return (
      <div className="container">
        <div className="subContainer">
          <h1>
            <strong>Registration Form</strong>
          </h1>
          <div className="inputField">
            <h4 className="headingTxt">
              <strong>First Name</strong>
            </h4>
            <input
              className="inputtxtType"
              name="fName"
              type="text"
              placeholder="Enter your First Name..."
              value={fName}
              onChange={this.onInputChange}
            />
            {submit && fName === "" && (
              <div>
                <p className="validationTxt">Please enter your First Name</p>
              </div>
            )}
          </div>
          <div className="inputField">
            <h4 className="headingTxt">
              <strong>Last Name</strong>
            </h4>
            <input
              className="inputtxtType"
              type="text"
              name="lName"
              placeholder="Enter your Last Name..."
              value={lName}
              onChange={this.onInputChange}
            />
            {submit && lName === "" && (
              <div>
                <p className="validationTxt">Please enter your Last Name</p>
              </div>
            )}
          </div>
          <div className="inputField">
            <h4 className="headingTxt">
              <strong>Email</strong>
            </h4>
            <input
              className="inputtxtType"
              type="email"
              name="email"
              placeholder="Enter your Email..."
              value={email}
              onChange={this.onInputChange}
              required
            />
            {submit && (email === "" || !email.includes("@")) && (
              <div>
                <p className="validationTxt">
                  Please enter your valid Email address
                </p>
              </div>
            )}
          </div>
          <div className="inputField">
            <h4 className="headingTxt">
              <strong>Password</strong>
            </h4>
            <input
              className="inputtxtType"
              type="password"
              name="password"
              value={password}
              onChange={this.onInputChange}
            />
            {submit && (password === "" || password.length < 8) && (
              <div>
                <p className="validationTxt">
                  Password must be at least 8 characters
                </p>
              </div>
            )}
          </div>
          <div>
            <div className="inputField">
              <div>
                <h4 className="headingTxt">
                  <strong>Gender</strong>
                </h4>
              </div>

              <div className="inputRadioType ">
                <input
                  type="radio"
                  name="Male"
                  checked={gender == "Male"}
                  onChange={this.setGender}
                  value="Male"
                />{" "}
                <label>Male</label>
                <input
                  type="radio"
                  name="Female"
                  checked={gender == "Female"}
                  onChange={this.setGender}
                  value="Female"
                />{" "}
                <label>Female</label>
              </div>
            </div>
            <div className="inputField">
              <div>
                <h4 className="headingTxt">
                  <strong>Interests</strong>
                </h4>
              </div>
              <div className="inputCheckboxType">
                {interestsList.map((item) => {
                  return (
                    <div className="checkboxes" key={item}>
                      <input
                        type="checkbox"
                        name={item}
                        value={item}
                        onChange={(e) => this.setInterests(e.target.value)}
                      />
                      <label>{item}</label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="inputField">
              <div>
                <h4 className="headingTxt">
                  <strong>Age</strong>
                </h4>
              </div>
              <div>
                <input
                  className="inputtxtType"
                  name="range_value"
                  type="range"
                  min={1}
                  max={100}
                  value={range_value}
                  onChange={this.onInputChange}
                />
                <p>Age: {range_value} yrs.</p>
              </div>
            </div>
            <div className="inputField">
              <div>
                <h4 className="headingTxt">
                  <strong>Date Of Birth</strong>
                </h4>
              </div>
              <div>
                <input
                  name="date_value"
                  value={date_value}
                  type="date"
                  className="inputtxtType"
                  onChange={this.onInputChange}
                />
              </div>
            </div>
          </div>
          <div className="submitBtn">
            <input
              className="btnType"
              type="submit"
              onClick={this.onSubmitBtn}
            />
          </div>
          {show && (
            <Modal isOpen={show}>
              <div className="modal">
                <h2>Hey!! Your details are:- </h2>

                <p>First Name: {fName}</p>
                <p>Last Name: {lName}</p>
                <p>Email: {email}</p>
                <p>Gender: {gender}</p>
                <p>
                  Interests:
                  {interests_data.map((item) => {
                    return <span key={item}>{item} </span>;
                  })}
                </p>
                <p>Age: {range_value} yrs.</p>
                <p>DOB: {date_value}</p>
                <button className="btnType" onClick={this.closeModal}>
                  Close
                </button>
              </div>
            </Modal>
          )}
        </div>
      </div>
    );
  }
}
export default InputForm;
