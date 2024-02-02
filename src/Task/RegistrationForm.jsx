import { useState } from "react";
import "./CSSFiles/styles.css";

const RegistrationForm = () => {
  const [stName, setStName] = useState({
    fName: "",
    mName: "",
    lName: "",
  });
  const [address, setAddress] = useState({
    streetAdd: "",
    streetAdd2: "",
    city: "",
    state: "",
    postalCode: "",
  });
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [workNum, setworkNum] = useState("");
  const [phNumber, setphNumber] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const months = [
    { id: 1, name: "January" },
    { id: 2, name: "February" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "June" },
    { id: 7, name: "July" },
    { id: 8, name: "August" },
    { id: 9, name: "September" },
    { id: 10, name: "October" },
    { id: 11, name: "November" },
    { id: 12, name: "December" },
  ];

  const genders = [
    { id: 1, name: "Female" },
    { id: 2, name: "Male" },
    { id: 3, name: "Others" },
  ];

  const onInputChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });

    setStName({ ...stName, [name]: value });
    setAddress({ ...address, [name]: value });
    setEmail({ ...email, [name]: value });
    setNumber({ ...number, [name]: value });
    setphNumber({ ...phNumber, [name]: value });
    setworkNum({ ...workNum, [name]: value });
  };

  const onHandleMonthChange = (e) => {
    const { value } = e.target;
    const selectedId = value;

    const selectedMonthObject = months.find((month) => month.id === selectedId);

    setSelectedMonth({ selectedMonthObject });
    console.log({ value });
  };

  const onGenderChange = (e) => {
    const { value } = e.target;
    const selectedId = value;

    const selectedGenderObject = genders.find(
      (gender) => gender.id === selectedId
    );

    setSelectedGender({ selectedGenderObject });
    console.log({ value });
  };

  return (
    <div className="container">
      <div>
        <h1 className="main-header">
          <strong>Registration Form</strong>
        </h1>
        <h4 className="main-header">
          Fill out the form carefully for registration
        </h4>
      </div>
      <hr width="100%" size="2"></hr>
      <div>
        <h4 className="header-txt">
          <strong>Student Name</strong>
        </h4>
        <div className="sub-container">
          <div>
            <input
              className="name-inputBox"
              type="text"
              name="fName"
              value={stName.fName}
              onChange={onInputChange}
            />
            <p className="label-txt">First Name</p>
          </div>

          <div>
            <input
              className="name-inputBox"
              type="text"
              name="mName"
              value={stName.mName}
              onChange={onInputChange}
            />
            <p className="label-txt">Middle Name</p>
          </div>

          <div>
            <input
              className="name-inputBox"
              type="text"
              name="lName"
              value={stName.lName}
              onChange={onInputChange}
            />
            <p className="label-txt">Last Name</p>
          </div>
        </div>
      </div>
      <div className="sub-container">
        <div>
          <h4 className="header-txt">
            <strong>Birth Date</strong>
          </h4>
          <div className="bd-container">
            <div>
              <select className="bd-inputbox" onChange={onHandleMonthChange}>
                {months.map((item) => {
                  return (
                    <option key={item.id} value={item.name} name="months">
                      {item.name}
                    </option>
                  );
                })}
              </select>
              <p className="label-txt">Month</p>
            </div>
            <div>
              <input className="bd-inputbox" type="text" />
              <p className="label-txt">Day</p>
            </div>
            <div>
              <select className="bd-inputbox" style={{ height: "30px" }}>
                {months.map((item) => {
                  return (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  );
                })}
              </select>

              <p className="label-txt">Year</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="header-txt">
            <strong>Gender</strong>
          </h4>
          <div>
            {" "}
            <select
              className="sub-inputbox"
              onChange={onGenderChange}
              style={{ height: "30px" }}
            >
              {genders.map((item) => {
                return (
                  <option key={item.id} value={item.name} name="gender">
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div>
        <h4 className="header-txt">
          <strong>Address</strong>
        </h4>
        <div>
          <input
            className="address-inputBox"
            type="text"
            value={address.streetAdd}
            name="streetAdd"
            onChange={onInputChange}
          />
          <p className="label-txt">Street Address</p>
          <input
            className="address-inputBox"
            type="text"
            value={address.streetAdd2}
            name="streetAdd2"
            onChange={onInputChange}
          />
          <p className="label-txt">Street Address Line2</p>
          <div className="sub-container">
            <div>
              <input
                className="sub-inputbox"
                type="text"
                value={address.city}
                name="city"
                onChange={onInputChange}
              />
              <p className="label-txt">City</p>
            </div>
            <div>
              <input
                className="sub-inputbox"
                type="text"
                value={address.state}
                name="state"
                onChange={onInputChange}
              />
              <p className="label-txt">State/Province</p>
            </div>
          </div>
          <input
            className="address-inputBox"
            type="text"
            value={address.postalCode}
            name="postalCode"
            onChange={onInputChange}
          />
          <p className="label-txt">Postal/Zip Code</p>
        </div>
      </div>
      <div className="sub-container">
        <div>
          <h4 className="header-txt">
            <strong>Student E-mail</strong>
          </h4>
          <input
            className="sub-inputbox"
            type="email"
            value={email}
            name="email"
            onChange={onInputChange}
          />
          <p className="label-txt">example@gmail.com</p>
        </div>

        <div>
          <h4 className="header-txt">
            <strong>Mobile Number</strong>
          </h4>

          <input
            className="sub-inputbox"
            type="text"
            value={number}
            name="number"
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="sub-container">
        <div>
          <h4 className="header-txt">
            <strong>Phone Number</strong>
          </h4>

          <input
            className="sub-inputbox"
            type="number"
            value={phNumber}
            name="phNumber"
            onChange={onInputChange}
          />
        </div>
        <div>
          <h4 className="header-txt">
            <strong>Work Number</strong>
          </h4>

          <input
            className="sub-inputbox"
            type="number"
            name="workNum"
            value={workNum}
            onChange={onInputChange}
          />
        </div>
      </div>

      <div className="sub-container">
        <div>
          <h4 className="header-txt">
            <strong>Company</strong>
          </h4>
          <input className="sub-inputbox" type="text" />
        </div>
        <div>
          <h4 className="header-txt">
            <strong>Courses</strong>
          </h4>
          <input className="sub-inputbox" type="text" />
        </div>
      </div>
      <div>
        <h4 className="header-txt">
          <strong>Additional Comments</strong>
        </h4>
        <input className="comments-inputBox" type="text" />
      </div>
    </div>
  );
};
export default RegistrationForm;
