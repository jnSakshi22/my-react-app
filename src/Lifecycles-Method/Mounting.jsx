import { Component } from "react";

class Mounting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    console.log("1. Constructor Loaded");
  }

  componentDidMount() {
    console.log("3. Mounting completed");
  }
  render() {
    console.log("2. Rendering Loaded");
    return (
      <div>
        <h1>Welcome to Mounting</h1>
      </div>
    );
  }
}
export default Mounting;
