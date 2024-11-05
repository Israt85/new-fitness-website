import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const MainLayouts = () => {
    return (
        <div className="max-w-7xl mx-auto min-h-screen bg-base-100">
           <Navbar></Navbar>
           <Outlet></Outlet> 
        </div>
    );
};

export default MainLayouts;