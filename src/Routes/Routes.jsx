import { createBrowserRouter } from "react-router-dom";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blogs from "../Pages/Blogs/Contact";
import Contact from "../Pages/Blogs/Contact";

const Router = createBrowserRouter([
    {
        path: '/home',
        element:<MainLayouts></MainLayouts>,
       children:[
        {
            path:'/home',
            element: <Home></Home>
        },
        {
          path:'aboutus',
          element: <AboutUs></AboutUs>
        },
        {
          path:'contact',
          element: <Contact></Contact>
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