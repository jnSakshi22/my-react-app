import { Component } from "react";
import "./CSSFiles/myStyle.css";

class ToDoApp extends Component {
  state = {
    rows: [
      {
        id: "1",
        name: "",
        contact: "",
        email: "",
        companyName: "",
        city: "",
      },
    ],
    isAdd: false,
    isEdit: false,
    isDelete: false,
    isSave: false,
  };

  onHandleAdd = () => {
    const { isAdd, rows } = this.state;
    this.setState({ isAdd: !isAdd });
    this.setState({
      rows: [
        ...rows,
        {
          id: rows.length + 1,
          name: "",
          contact: "",
          email: "",
          companyName: "",
          city: "",
        },
      ],
    });
  };

  onHandleEdit = () => {
    const { isEdit } = this.state;
    this.setState({ isEdit: !isEdit });
  };

  onInputChange = (e, index) => {
    console.log("Index:", index);
    const { rows } = this.state;

    const { name, value } = e.target;
    console.log({ name, value });

    const list = [...rows];
    console.log(list);

    list[index][name] = value;
    this.setState({ rows: list });
  };

  onHandleSave = () => {
    const { isSave, isEdit, rows } = this.state;
    this.setState({ isSave: !isSave });
    this.setState({ isEdit: !isEdit });
    this.setState({ rows: rows });
  };

  onHandleDelete = (i) => {
    const { rows } = this.state;
    const list = [...rows];

    list.splice(i, 1);
    this.setState({ rows: list });
  };

  render() {
    const { rows, isEdit } = this.state;

    return (
      <div className="container">
        <div>
          <strong>
            <h1 className="headingTxt">To Do App</h1>
          </strong>
        </div>
        <div></div>
        <table>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Name</th>
              <th>Contact No.</th>
              <th>Email</th>
              <th>Company Name</th>
              <th>City</th>
              <th>
                <button className="btnType" onClick={this.onHandleAdd}>
                  Add
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item, index = 1) => {
              return (
                <>
                  <tr>
                    {isEdit ? (
                      <>
                        <td>
                          <input
                            type="text"
                            value={index}
                            name="id"
                            onChange={(e) => this.onInputChange(e, index)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            value={item.name}
                            name="name"
                            onChange={(e) => this.onInputChange(e, index)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            value={item.contact}
                            name="contact"
                            onChange={(e) => this.onInputChange(e, index)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            value={item.email}
                            name="email"
                            onChange={(e) => this.onInputChange(e, index)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            value={item.companyName}
                            name="companyName"
                            onChange={(e) => this.onInputChange(e, index)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            value={item.city}
                            name="city"
                            onChange={(e) => this.onInputChange(e, index)}
                          />
                        </td>
                        <td>
                          <button
                            className="btnType"
                            onClick={this.onHandleSave}
                          >
                            Save
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.contact}</td>
                        <td>{item.email}</td>
                        <td>{item.companyName}</td>
                        <td>{item.city}</td>
                        <td>
                          <button
                            className="btnType"
                            onClick={this.onHandleEdit}
                          >
                            Edit
                          </button>
                          <button
                            className="btnType"
                            onClick={() => this.onHandleDelete(index)}
                          >
                            Delete
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ToDoApp;
