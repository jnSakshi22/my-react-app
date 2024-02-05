import { useEffect, useState } from "react";

const Issues = () => {
  const [numbers, setNumbers] = useState([1, 2, 1, 1, 1, 3, 4]);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [totalOccurence, setTotalOccurence] = useState(0);

  useEffect(() => {
    if (selectedNumber === null || selectedNumber === "") {
      return;
    }

    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] == selectedNumber) {
        count++;
      }
      setTotalOccurence(count);
    }
  }, [selectedNumber, numbers]);

  console.log("Re-Render: ", totalOccurence, selectedNumber);

  return (
    <div>
      <h1>Total: {totalOccurence}</h1>
      <input type="text" onChange={(e) => setSelectedNumber(e.target.value)} />
    </div>
  );
};

export default Issues;
