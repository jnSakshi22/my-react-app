import { useEffect, useState } from "react";
import "./style.css";

const interestsList = ["Sports", "Music", "Reading", "Coding"];

const RegistrationForm = () => {
  useEffect(() => {
    const storedData = localStorage.getItem("personDetails");
    if (storedData) {
      setPersonDetails(JSON.parse(storedData));
    }
  }, []);

  const [personDetails, setPersonDetails] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    isSubmit: false,
    rangeValue: 1,
    show: false,
    gender: "",
    hobbies: [],
    dateValue: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });

    setPersonDetails((prevDetails) => {
      const updatedDetails = { ...prevDetails, [name]: value };
      localStorage.setItem("personDetails", JSON.stringify(updatedDetails));
      return updatedDetails;
    });
  };

  const onHandleHobbies = (val) => {
    setPersonDetails((prevDetails) => {
      const { hobbies } = prevDetails;
      const updatedInterests = hobbies.includes(val)
        ? hobbies.filter((item) => item !== val)
        : [...hobbies, val];

      const updatedDetails = { ...prevDetails, hobbies: updatedInterests };
      localStorage.setItem("personDetails", JSON.stringify(updatedDetails));
      return updatedDetails;
    });
  };

  const {
    fName,
    lName,
    email,
    password,
    isSubmit,
    gender,
    rangeValue,
    dateValue,
  } = personDetails;
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
            value={personDetails.fName}
            onChange={onInputChange}
          />
          {isSubmit && fName === "" && (
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
            onChange={onInputChange}
          />
          {isSubmit && lName === "" && (
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
            onChange={onInputChange}
            required
          />
          {isSubmit && (email === "" || !email.includes("@")) && (
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
            onChange={onInputChange}
          />
          {isSubmit && (password === "" || password.length < 8) && (
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
                onChange={() => {
                  onInputChange({ target: { name: "gender", value: "Male" } });
                }}
                value="Male"
              />
              <label>Male</label>
              <input
                type="radio"
                name="Female"
                checked={gender == "Female"}
                onChange={() => {
                  onInputChange({
                    target: { name: "gender", value: "Female" },
                  });
                }}
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
                      onChange={(e) => onHandleHobbies(e.target.value)}
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
                name="rangeValue"
                type="range"
                min={1}
                max={100}
                value={rangeValue}
                onChange={onInputChange}
              />
              <p>Age: {rangeValue} yrs.</p>
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
                name="dateValue"
                value={dateValue}
                type="date"
                className="inputtxtType"
                onChange={onInputChange}
              />
            </div>
          </div>
        </div>
        {/* <div className="submitBtn">
          <input className="btnType" type="submit" onClick={onSubmitBtn} />
        </div> */}
        {/* {show && (
          <Modal isOpen={show}>
            <div className="modal">
              <h2>Hey!! Your details are:- </h2>

              <p>First Name: {fName}</p>
              <p>Last Name: {lName}</p>
              <p>Email: {email}</p>
              <p>Gender: {gender}</p>
              <p>
                Interests:
                {hobbies.map((item) => {
                  return <span key={item}>{item} </span>;
                })}
              </p>
              <p>Age: {rangeValue} yrs.</p>
              <p>DOB: {dateValue}</p>
              <button className="btnType" onClick={onCloseModal}>
                Close
              </button>
            </div>
          </Modal>
        )} */}
      </div>
    </div>
  );
};
export default RegistrationForm;
