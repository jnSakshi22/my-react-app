import { useState } from "react";

function Greetings() {
  const [uName, setUName] = useState("");

  return (
    <>
      <input
        placeholder="Enter your name..."
        type="text"
        onChange={(e) => setUName(e.target.value)}
      />
      {uName && (
        <p>
          Hey!! Welcome <strong>{uName}</strong> to the team.
        </p>
      )}
    </>
  );
}

export default Greetings;
