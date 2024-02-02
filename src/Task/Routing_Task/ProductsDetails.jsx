import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  // useParams Hook helps to access the parameters of the current route to manage the dynamic routes in the URL.

  const { id } = params;
  // Parse the data with JSON.parse(), and the data becomes a JavaScript object.
  const products = JSON.parse(localStorage.getItem("products"));
  console.log(products);

  const productData = products.find((item) => item.id === Number(id));

  return (
    <>
      <h1>Product Details</h1>
      <p>Id: {productData.id}</p>
      <p>Title: {productData.title}</p>
      <p>Price: ${productData.price}</p>
      <p>Description: {productData.description}</p>
      <p>Category:{productData.category}</p>
    </>
  );
};
export default ProductDetails;
