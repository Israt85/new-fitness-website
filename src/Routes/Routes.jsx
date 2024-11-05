import { createBrowserRouter } from "react-router-dom";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";

const Router = createBrowserRouter([
    {
        path: '/home',
        element:<MainLayouts></MainLayouts>,
       children:[
        {
            path:'/home',
            element: <Home></Home>
        }
       ]
    },
    {
      path: "/",
      element: <Signup></Signup>,
    },
    {
        path: '/login',
        element: <Login></Login>
    },
   
  ]);

export default Router;