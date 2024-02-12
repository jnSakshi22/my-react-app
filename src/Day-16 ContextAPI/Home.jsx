import AComp from "./A";
import { ProfileProvider } from "./contexts/profile.context";

const HomeUsingContext = () => {
  return (
    <ProfileProvider value={{ name: "Varun", city: "Pune", state: "MH" }}>
      <h1>I am Home Component</h1>
      <AComp />
    </ProfileProvider>
  );
};

export default HomeUsingContext;
