import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const MainLayouts = () => {
    return (
        <div className="max-w-7xl mx-auto overflow-hidden min-h-screen bg-base-100">
           <Navbar></Navbar>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default MainLayouts;