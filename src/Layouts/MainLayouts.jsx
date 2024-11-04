import { Outlet } from "react-router-dom";

const MainLayouts = () => {
    return (
        <div>
           This is home
           <Outlet></Outlet> 
        </div>
    );
};

export default MainLayouts;