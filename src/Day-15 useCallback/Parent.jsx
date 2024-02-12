import { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  console.log("Parent Re-Render: ", counter1, counter2);

  const onIncrementOne = useCallback(() => {
    setCounter1((prev) => prev + 1);
    //setCounter1(counter1 + 1);
  }, [setCounter1]);

  return (
    <div>
      <h1>
        {counter1} - {counter2}
      </h1>

      <button onClick={() => setCounter1((prev) => prev + 1)}>
        Increment 1
      </button>
      <button onClick={() => setCounter2((prev) => prev + 1)}>
        Increment 2
      </button>
      <Child count={counter1} onClick={onIncrementOne} />
    </div>
  );
};

export default Parent;
