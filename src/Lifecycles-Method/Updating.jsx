import { Component } from "react";

class Updating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      products: [],
    };

    console.log("1. Constructor Loaded");
  }

  onIncrementCounter = () => {
    console.log("4. Updating the counter Value+1");
    this.setState({ counter: this.state.counter + 1 });
  };

  componentDidMount() {
    console.log("3. Mounting completed");

    // Call - GetProductsAPI
    // Post recieving data -> Set Products Array
    // Re-Render via setState
  }
  // this is buint-in force update method
  //this.forceUpdate();

  render() {
    const { counter } = this.state;
    console.log("2. Rendering Loaded");
    return (
      <div>
        <h1>Welcome to Mounting : {counter}</h1>
        <button onClick={this.onIncrementCounter}>Increment Counter</button>
        {/**
         * Product.length > 0 {Render UI} : Animation Loader
         */}
      </div>
    );
  }
}

export default Updating;
