import { Component } from "react";

class Counter extends Component {
  state = {
    counter: 1,
  };

  onIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  onDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    const { counter } = this.state; //Destructuring
    console.log("Re-Rndering: ", counter);
    return (
      <div>
        <h4>Counter : {counter}</h4>
        <button onClick={this.onIncrement}>Increment</button>
        <button
          onClick={() => {
            this.setState({ counter: counter - 1 });
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
