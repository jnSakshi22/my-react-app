import { useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Page";
    console.log("Contact is mounted");

    return () => {
      console.log("Contact is Unmounted");
    };
  }, []);
  return (
    <div>
      <h1>Welcome to Contact</h1>

      <hr />
      <Link to="/">Go to Home</Link>
      <br />
      <Link to="/about">Go to About</Link>
    </div>
  );
};

export default Contact;
