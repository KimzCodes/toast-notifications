import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import MainLayout from "../layouts/MainLayout";

// pages
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import AboutUs from "../pages/AboutUs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/categories", element: <Categories /> },
      { path: "/about-us", element: <AboutUs /> },
    ],
  },
]);

const AppRoutes = ({ children }) => {
  return <RouterProvider router={routes}>{children}</RouterProvider>;
};

export default AppRoutes;
