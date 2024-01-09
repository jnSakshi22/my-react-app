const Homepage = () => {
  const showGreetings = () => {
    alert("Welcome Sachin!");
  };

  const onInputChange = (e) => {
    console.log("Value: ", e.target.value);
  };

  return (
    <div>
      <h1
        onClick={showGreetings}
        style={{ color: "white", backgroundColor: "teal", padding: "6px" }}
      >
        Welcome to Ecom Store {10 + 20 - 10 + 80}
      </h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Support</li>
      </ul>
      <input type="text" onChange={onInputChange} />
    </div>
  );
};

export default Homepage;
