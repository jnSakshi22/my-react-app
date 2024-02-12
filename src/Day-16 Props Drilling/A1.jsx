import A2Comp from "./A2";

const A1Comp = ({ name, city }) => {
  return (
    <>
      <h1>I am A1Comp Component</h1>
      <A2Comp name={name} city={city} />
    </>
  );
};

export default A1Comp;
