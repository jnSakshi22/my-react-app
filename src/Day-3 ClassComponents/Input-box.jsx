import { Component } from "react";

class InputBox extends Component {
  state = {
    uName: "Sakshi",
    uCity: "Indore",
    uState: "Madhya Pradesh",
    uCountry: "BHARAT",
  };
  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.state.uName} />
        </div>
        <div>
          <h2>
            Hello{" "}
            <span>
              {this.state.uName} from {this.state.uCity}
            </span>
          </h2>
          <h2>
            {this.state.uCity} in <span>{this.state.uState} state. </span>
          </h2>
          <h2>
            I Love <span>{this.state.uCountry}</span>
          </h2>
          <h2>
            Hello <span>{this.state.uName}</span>
          </h2>
          <h2>
            Hello <span>{this.state.uName}</span>
          </h2>
          <h2>
            Hello <span>{this.state.uName}</span>
          </h2>
        </div>
      </div>
    );
  }
}

export default InputBox;