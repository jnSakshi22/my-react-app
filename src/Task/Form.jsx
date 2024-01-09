import { Component } from "react";
import "./style.css";
import Modal from "react-modal";

class InputForm extends Component {
  state = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    submit: false,
    value: 1,
    show: false,
    gender: "",
    interests_data: [],
    date_value: "",
  };
  render() {
    const {
      fName,
      lName,
      email,
      password,
      submit,
      value,
      show,
      gender,
      interests_data,
      date_value,
    } = this.state;

    const onInputFirstName = (e) => {
      this.setState({ fName: e.target.value });
    };
    const onInputLastName = (e) => {
      this.setState({ lName: e.target.value });
    };

    const onInputEmail = (e) => {
      this.setState({ email: e.target.value });
    };

    const onSubmitBtn = () => {
      this.setState({ submit: !submit });
      fName != "" &&
        lName != "" &&
        email != "" &&
        password != "" &&
        password.length > 8 &&
        this.setState({ show: !show });
    };

    const onInputPwd = (e) => {
      this.setState({ password: e.target.value });
    };

    const onInputRange = (e) => {
      this.setState({ value: e.target.value });
    };
    const setGender = (e) => {
      this.setState({
        gender: e.target.value,
      });
    };

    const setInterests = (val) => {
      const interests_data = this.state.interests_data;
      const findIdx = interests_data.indexOf(val);

      if (findIdx > -1) {
        interests_data.splice(findIdx, 1);
      } else {
        interests_data.push(val);
      }

      this.setState({
        interests_data: interests_data,
      });
    };

    const setDate = (e) => {
      this.setState({ date_value: e.target.value });
    };

    const closeModal = () => {
      this.setState({ show: !show });
      window.location.reload();
    };

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
              type="text"
              placeholder="Enter your First Name..."
              value={fName}
              onChange={onInputFirstName}
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
              placeholder="Enter your Last Name..."
              value={lName}
              min="8"
              onChange={onInputLastName}
              required
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
              placeholder="Enter your Email..."
              value={email}
              onChange={onInputEmail}
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
              value={password}
              onChange={onInputPwd}
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
                  checked={gender == "Male"}
                  onChange={setGender}
                  value="Male"
                />{" "}
                Male
                <input
                  type="radio"
                  checked={gender == "Female"}
                  onChange={setGender}
                  value="Female"
                />{" "}
                Female
              </div>
            </div>
            <div className="inputField">
              <div>
                <h4 className="headingTxt">
                  <strong>Interests</strong>
                </h4>
              </div>
              <div className="inputCheckboxType">
                <div className="checkboxes">
                  <input
                    type="checkbox"
                    name="Sports"
                    value="Sports"
                    onChange={(e) => setInterests(e.target.value)}
                  />
                  Sports
                </div>
                <div className="checkboxes">
                  <input
                    type="checkbox"
                    name="Music"
                    value="Music"
                    onChange={(e) => setInterests(e.target.value)}
                  />
                  Music
                </div>
                <div className="checkboxes">
                  <input
                    type="checkbox"
                    name="Reading"
                    value="Reading"
                    onChange={(e) => setInterests(e.target.value)}
                  />
                  Reading
                </div>
                <div className="checkboxes">
                  <input
                    type="checkbox"
                    name="Coding"
                    value="Coding"
                    onChange={(e) => setInterests(e.target.value)}
                  />
                  Coding
                </div>
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
                  type="range"
                  min={1}
                  max={100}
                  value={value}
                  onChange={onInputRange}
                />
                <p>Age: {value} yrs.</p>
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
                  value={date_value}
                  type="date"
                  className="inputtxtType"
                  onChange={setDate}
                />
              </div>
            </div>
          </div>
          <div className="submitBtn">
            <input className="btnType" type="submit" onClick={onSubmitBtn} />
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
                <p>Age: {value} yrs.</p>
                <p>DOB: {date_value}</p>
                <button className="btnType" onClick={closeModal}>
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
