import { useState } from "react";
import AComp from "./A";
import { ProfileProvider } from "./contexts/profile.context";

const HomeUsingContextV2 = () => {
  const [uName, setUName] = useState("Varun");

  return (
    <ProfileProvider
      value={{ name: uName, city: "Pune", state: "MH", onNameChange: setUName }}
    >
      <input
        type="text"
        value={uName}
        onChange={(e) => setUName(e.target.value)}
        placeholder="Enter your name"
      />
      <h1>I am Home Component</h1>
      <AComp />
    </ProfileProvider>
  );
};

export default HomeUsingContextV2;
