import { useState } from "react";
const Calcualtor = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const onAdd = () => {
    setResult(+num1 + +num2);
  };

  const onSubtract = () => {
    setResult(num1 - num2);
  };

  const onDivide = () => {
    setResult(num1 / num2);
  };

  const onMultiple = () => {
    setResult(num1 * num2);
  };

  return (
    <div>
      <h1>Result: {result}</h1>
      <input
        type="text"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="text"
        value={num2}
        placeholder="Enter second number"
        onChange={(e) => setNum2(e.target.value)}
      />

      <div>
        <button onClick={onAdd}>Add</button>
        <button onClick={onMultiple}>Multiply</button>
        <button onClick={onDivide}>Divide</button>
        <button onClick={onSubtract}>Subtract</button>
      </div>
    </div>
  );
};

export default Calcualtor;
