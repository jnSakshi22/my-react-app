import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    // document.title = "Home Page";
    console.log("Home is mounted");

    return () => {
      console.log("Home is Unmounted");
    };
  }, []);
  return (
    <div>
      <h1>Welcome to Home</h1>
      <Helmet>
        {/* <meta charSet="utf-8" /> */}
        <title>Home Page | Main Page</title>
      </Helmet>

      <hr />
      <Link to="/about">Go to About</Link>
      <br />
      <Link to="/contact">Go to Contact</Link>
    </div>
  );
};

export default Home;
