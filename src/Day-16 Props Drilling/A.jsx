import A1Comp from "./A1";

const AComp = ({ name, city }) => {
  return (
    <>
      <h1>I am A Component</h1>
      <A1Comp name={name} city={city} />
    </>
  );
};

export default AComp;
