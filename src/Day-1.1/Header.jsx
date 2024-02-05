function Header() {
  const uName = "Anika";
  const uCompany = "Google";

  return (
    <header style={{ background: "#325795", padding: "12px" }}>
      <span>
        <strong>Flipkart</strong>{" "}
      </span>
      <span style={{ marginLeft: "20px", backgroundColor: "red" }}>
        Welcome {uName} form {uCompany}
      </span>
    </header>
  );
}

export default Header;