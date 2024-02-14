import { useContext } from "react";
import A3Comp from "./A3";
import { profileContext } from "./contexts/profile.context";

const A2Comp = () => {
  const { onNameChange, name } = useContext(profileContext);
  return (
    <>
      <h1>I am A2Comp Component</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        placeholder="Enter name"
      />
      <A3Comp />
    </>
  );
};

export default A2Comp;