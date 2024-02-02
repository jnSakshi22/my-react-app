import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductList from "./ProductList/ProductList.layout";
import ProductDetails from "./ProductDetails/ProductDetails.Layout";
import QueryParams from "./query-params";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
  {
    path: "/details/:meraProductId",
    element: <ProductDetails />,
  },

  {
    path: "/search",
    element: <QueryParams />,
  },
]);

const Home = () => {
  return <RouterProvider router={router} />;
};

export default Home;
