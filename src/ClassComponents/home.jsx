import { Component } from "react";
import Footer from "./footer";
import Header from "./header";

class Home extends Component {
  render() {
    return (
      <div>
        <p
          style={{
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
            padding: "12px",
          }}
        >
          <strong>Home Page!!</strong>
        </p>
        <p>With some Header and Footer Data</p>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Home;
