import { Component } from "react";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class ToDoAppV2 extends Component {
  state = {
    todo: [{ title: "", desc: "" }],
    isAdd: false,
  };

  onInputChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });

    this.setState({ [name]: value });
  };

  onAddNewToDoItem = () => {
    const { isAdd } = this.state;
    this.setState({ isAdd: !isAdd });
  };

  render() {
    const { title, desc, isAdd } = this.state;
    console.log("Title and Desc:", title, desc);
    return (
      <div>
        <div>
          <h3>To Do Title</h3>
        </div>

        <div>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Enter your Todo Title..."
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <h3>To Do Description</h3>
        </div>
        <div>
          <input
            type="text"
            name="desc"
            value={desc}
            placeholder="Enter your Todo Description..."
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <button onClick={this.onAddNewToDoItem}>Add</button>
          <button>Save</button>
        </div>
        {isAdd && (
          <>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{title}</td>
                  <td>{desc}</td>
                </tr>
              </tbody>
            </table>
          </>
        )}
        {/* <ToastContainer /> */}
      </div>
    );
  }
}

export default ToDoAppV2;
