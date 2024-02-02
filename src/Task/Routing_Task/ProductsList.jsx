import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((data) => data.json())
      .then((data) => {
        // setProducts(data);
      })
      .catch((err) => {
        console.log("Error : ", err);
        setProducts([]);
      });
  }, []);

  // useEffect(() => {callbackfunction}, [dependency]);

  useEffect(() => {
    // The localStorage.setItem() method is used to store data in the browser’s local storage.
    // JSON.stringify() function to convert JavaScript objects and arrays into strings that can be sent to a web server or stored in local storage.
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((item) => {
          return (
            <div key={item.id}>
              <Link to={"itemDetails/" + item.id}>
                <li>{item.title}</li>
              </Link>
            </div>
          );
        })}
      </ul>

      {/* {products.map((item) => {
        return (
          <div className="card" key={item.id}>
            <img src={item.image} style={{ height: "100px", width: "120px" }} />
            <div className="container">
              <p>{item.id}</p>
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>{item.description}</p>
              <p>{item.category}</p>
            </div>
            <Link to={"itemDetails/" + item.id}>Details of {item.id}</Link>
          </div>
        );
      })} */}
    </div>
  );
};

export default ProductList;
