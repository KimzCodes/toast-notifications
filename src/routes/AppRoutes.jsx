import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import MainLayout from "../layouts/MainLayout";

// pages
import Home from "../pages/Home";
import Categories from "../pages/Categories";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/categories", element: <Categories /> },
    ],
  },
]);

const AppRoutes = ({ children }) => {
  return <RouterProvider router={routes}>{children}</RouterProvider>;
};

export default AppRoutes;
