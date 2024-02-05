import { Component } from "react";

class Mounting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      products: [],
    };
    console.log("1. Constructor Loaded");
  }

  componentDidMount() {
    console.log("3. Mounting completed");

    // Call - GetProductsAPI
    // Post recieving data -> Set Products Array
    // Re-Render via setState
  }
  render() {
    console.log("2. Rendering Loaded");
    return (
      <div>
        <h1>Welcome to Mounting</h1>
        {/**
         * Product.length > 0 {Render UI} : Animation Loader
         */}
      </div>
    );
  }
}
export default Mounting;
