import { Component } from "react";

class ValidationExample extends Component {
  state = {
    uName: "",
    uNameErr: false,
  };

  onValidateForm = () => {
    const newState = { uNameErr: false };
    if (!this.state.uName) {
      newState.uNameErr = true;
    }

    this.setState(newState);
  };

  render() {
    const { uName, uNameErr } = this.state;
    return (
      <div>
        <div className="form-elements">
          <p>Name</p>
          <input
            type="text"
            value={uName}
            onChange={(e) => this.setState({ uName: e.target.value })}
          />
          {uNameErr && <label>Please enter Valid Name in characters</label>}
        </div>
        <button onClick={this.onValidateForm}>Validate</button>
      </div>
    );
  }
}

export default ValidationExample;