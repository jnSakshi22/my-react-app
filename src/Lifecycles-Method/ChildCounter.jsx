import { Component } from "react";

class ChildCounter extends Component {
  constructor(props) {
    super(props);
    console.log("1.ChildCounter Constructor");
  }
  componentDidMount() {
    console.log("2.ChildCounter componentDidMount");
  }

  render() {
    console.log("3.ChildCounter render");
    return (
      <div>
        <h1>{this.props.counter}</h1>
      </div>
    );
  }
}
export default ChildCounter;
