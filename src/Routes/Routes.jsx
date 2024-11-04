import { createBrowserRouter } from "react-router-dom";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Signup></Signup>,
    },
    {
        path: '/login',
        element: <Login></Login>
    }
  ]);

export default Router;