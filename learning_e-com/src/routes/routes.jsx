import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {
  Home,
  Login,
  Forgotpassword,
  Signup,
  AdminPanel,
  Allusers,
  AllProduct,
  CategoryProduct,
} from "../pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgotpassword",
        element: <Forgotpassword />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "adminpanel",
        element: <AdminPanel />,
        children: [
          {
            path: "allusers",
            element: <Allusers />,
          },
          {
            path: "allproduct",
            element: <AllProduct />,
          },
        ],
      },

      {
        path: "categoryproduct/:categoryName",
        element: <CategoryProduct />,
      },
    ],
  },
]);

export default router;
