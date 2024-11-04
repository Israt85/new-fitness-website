import { createBrowserRouter } from "react-router-dom";
import Signup from "../Pages/Signup/Signup";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Signup></Signup>,
    },
    {

    }
  ]);

export default Router;