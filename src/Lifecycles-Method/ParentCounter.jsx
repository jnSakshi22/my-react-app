import { Component } from "react";
import ChildCounter from "./ChildCounter";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      products: [],
    };

    console.log("1.ParentComponent Constructor Loaded");
  }

  onIncrementCounter = () => {
    console.log("4.ParentComponent Updating the counter Value+1");
    this.setState({ counter: this.state.counter + 1 });

    //This is a built-in force re-render method
    //this.forceUpdate();
  };

  componentDidMount() {
    console.log("3.ParentComponent Mounting completed");

    // Call - GetProductsAPI
    // Post recieving data -> Set Products Array
    // Re-Render via setState
  }

  render() {
    const { counter } = this.state;
    console.log("2.ParentComponent Rendering Loaded");
    return (
      <div>
        <h1>Welcome to Parent Counter Component</h1>
        <button onClick={this.onIncrementCounter}>Increment Counter</button>
        <ChildCounter counter={counter} />
      </div>
    );
  }
}

export default ParentComponent;
