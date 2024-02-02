import { useState, useEffect } from "react";

const UseEffectsExamples = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(10);

  //   //   useEffect(() => {callbackfunction},[dependency]);

  // useEffect with blank dependency array
  // Run Once
  // On first load
  useEffect(() => {
    console.log("Component Succesfully Loaded");
  }, []);

  // useEffect with some dependency array
  // Run on state or props change

  // Loading On counter 1 changes
  useEffect(() => {
    console.log("Counter 1 inside useEffect: ", counter1);
  }, [counter1]);

  // Loading On counter 2 changes
  useEffect(() => {
    console.log("Counter 2 inside useEffect: ", counter2);
  }, [counter2]);

  // Loading On counter 1 & 2 changes
  useEffect(() => {
    console.log("Counter 1 and 2 inside useEffect: ", counter1, counter2);
  }, [counter1, counter2]);

  console.log("Counter 1 and 2 values:", counter1, counter2);
  return (
    <div>
      <p>Counter1: {counter1}</p>
      <p>Counter2: {counter2}</p>
      <button onClick={() => setCounter1((prevState) => prevState + 1)}>
        Increment 1
      </button>
      <button onClick={() => setCounter2((prevState) => prevState + 1)}>
        Increment 2
      </button>
    </div>
  );
};

export default UseEffectsExamples;
