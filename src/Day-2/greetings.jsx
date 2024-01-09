// Normal Function
/* function Greetings(props) {
  console.log("Props: ", props);
  return (
    <div>
      <p style={{ color: props.color || "pink" }}>
        Welcome {props.uName} from {props.company || "TBD"}
      </p>
    </div>
  );
} */

const Greetings = (props) => {
  console.log("Props: ", props);

  const showAlert = () => {
    alert(`Welcome ${props?.uName}`);
  };

  const listItmes = props.hobbies.map((elements) => elements);

  return (
    // <div>
    //   <p style={{ color: props.color }}>
    //     Welcome {props.uName} from {props.company}
    //   </p>
    //   <button onClick={showAlert}>Show Alert</button>
    // </div>

    <div>
      <ul>
        <li key={listItmes}>{listItmes}</li>
      </ul>
      <h1>{props?.profile?.country || "NA"}</h1>{" "}
      <p style={{ color: props.color }}>
        Welcome {props.uName} from {props.company}
      </p>
      <button onClick={showAlert}>Show Alert</button>
    </div>
  );
};

Greetings.defaultProps = {
  color: "brown",
  company: "NA",
  hobbies: "NA",
};

export default Greetings;
