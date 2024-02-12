import A3Comp from "./A3";

const A2Comp = ({ name, city }) => {
  return (
    <>
      <h1>I am A2Comp Component</h1>
      <A3Comp name={name} city={city} />
    </>
  );
};

export default A2Comp;