import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./ProductsList";
import ProductDetails from "./ProductsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
  { path: "itemDetails/:id", element: <ProductDetails /> },
]);

const APIRouting = () => {
  return <RouterProvider router={router} />;
};

export default APIRouting;
