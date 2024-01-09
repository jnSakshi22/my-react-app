import Greetings from "./Day-2/greetings";

function App() {
  return (
    <>
      <Greetings
        uName={"Shakthi"}
        company="Meta"
        color="blue"
        profile={{
          city: "Chennai",
          state: "TN",
          country: "Bharat",
          nationality: "Bhatiya",
        }}
        hobbies={["Music", "Travel"]}
        isMarried={false}
      />

      {/* <Greetings uName="Sumit" company="Cognizant" color="Blue" />
      <Greetings uName="Sagar" company="TCS" color="Green" />
      <Greetings uName="Ankita" company="Apple Inc." color="Red" /> */}
    </>
  );
}

export default App;
