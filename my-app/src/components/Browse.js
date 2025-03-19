import Header from "./Header";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Browse = () => {

    useEffect(() => 
        window.scrollTo(0, 0)
    , []);
    
    return  (
        <div className="max-w-full bg-black mx-auto overflow-x-hidden my-0 p-0">
            <div className="max-w-full xl:max-w-[1351px] mx-auto overflow-x-hidden my-0 p-0">
              <Header />
              <Outlet />
            </div>
        </div>
    );
};

export default Browse;