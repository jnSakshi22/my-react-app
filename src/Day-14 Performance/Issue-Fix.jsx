import { useMemo, useState } from "react";

const numbers = [1, 2, 1, 1, 1, 3, 4];
const IssuesFix = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);

  const totalOccurence = useMemo(() => {
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
      <input type="text" onChange={(e) => setSelectedNumber(e.target.value)} />
    </div>
  );
};

export default IssuesFix;
