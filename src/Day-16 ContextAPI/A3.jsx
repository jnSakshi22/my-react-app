import { useContext } from "react";
import { profileContext } from "./contexts/profile.context";

const A3Comp = () => {
  const profile = useContext(profileContext);
  return (
    <>
      <h1>
        I am A3Comp Component using useContext : {profile.name} | {profile.city}{" "}
        | {profile.state}
      </h1>
    </>
  );
};

export default A3Comp;