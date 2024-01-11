import { Outlet, useLocation } from "react-router-dom";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";


const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
           { noHeaderFooter || <Navber></Navber> }
            <Outlet></Outlet>
           { noHeaderFooter || < Footer></Footer> }
        </div>
    );
};

export default MainLayout;