import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: (
      <div>
        <h1>
          <strong>Sorry! Wrong Window!!</strong>
        </h1>
      </div>
    ),
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
