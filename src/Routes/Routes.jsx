import { createBrowserRouter } from "react-router-dom";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact1 from "../Pages/Contact/Contact1";
import Blog from "../Pages/Blog/Blog";


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
          element: <Contact1></Contact1>
        },
        {
          path:'blog',
          element:<Blog></Blog>
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