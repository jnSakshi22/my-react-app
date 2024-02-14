// Predefined - const [anystate, anydispatch] = useReducer(function, initialState)

import { useReducer } from "react";
import { calcualtorReducer } from "./2.calculator.reducer";

const initialState = {
  num1: "",
  num2: "",
  result: 0,
};

const CalcualtorUseReducer = () => {
  const [state, dispatch] = useReducer(calcualtorReducer, initialState);

  return (
    <div>
      <h1>Result with UR: {state.result}</h1>
      <input
        type="text"
        placeholder="Enter first number"
        value={state.num1}
        onChange={(e) => dispatch({ type: "num1", value: e.target.value })}
      />
      <input
        type="text"
        value={state.num2}
        placeholder="Enter second number"
        onChange={(e) => dispatch({ type: "num2", value: e.target.value })}
      />

      <div>
        <button onClick={() => dispatch({ type: "add" })}>Add</button>
        <button onClick={() => dispatch({ type: "multiply" })}>Multiply</button>
        <button onClick={() => dispatch({ type: "divide" })}>Divide</button>
        <button onClick={() => dispatch({ type: "subtract" })}>Subtract</button>
      </div>
    </div>
  );
};

export default CalcualtorUseReducer;