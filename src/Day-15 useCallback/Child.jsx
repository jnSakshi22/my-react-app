import { memo } from "react";

const Child = ({ count, onClick }) => {
  console.log("Child Re-Render: ", count);
  return (
    <>
      <div>I am a Child Component</div>
      <button onClick={onClick}>Increment from child</button>
    </>
  );
};

export default memo(Child);
