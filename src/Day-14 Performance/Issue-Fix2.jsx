import { useMemo, useState } from "react";

const numbers = [1, 2, 1, 1, 1, 3, 4];
const IssuesFix2 = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [count, setCount] = useState(0);

  const totalOccurence = useMemo(() => {
    console.log("useMemo Re-Running");
    if (selectedNumber === null || selectedNumber === "") {
      return 0;
    }

    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] == selectedNumber) {
        count++;
      }
    }
    return count;
  }, [selectedNumber]);

  console.log("Re-Render: ", totalOccurence, selectedNumber);

  return (
    <div>
      <h1>Total: {totalOccurence}</h1>
      <button onClick={() => setCount((val) => val + 1)}>
        Increment {count}
      </button>
      <input type="text" onChange={(e) => setSelectedNumber(e.target.value)} />
    </div>
  );
};

export default IssuesFix2;
