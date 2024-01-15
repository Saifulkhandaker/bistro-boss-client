import { FaBook, FaCalendarAlt, FaElementor, FaHome, FaList, FaRegAddressBook, FaShopify, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { FaEnvelope } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import useAdmin from "../hooks/useAdmin";
import useMenu from "../hooks/useMenu";


const Dashboard = () => {

    const [cart] = useCart();
    const [menu] = useMenu();

    // get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <Helmet>
                <title>Bistro Boss | Dashboard</title>
            </Helmet>
            {/*dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu">
                   {
                      isAdmin ? <>
                      <li>
                        <NavLink to="/dashboard/adminHome">
                        <FaHome></FaHome>   
                            Admin Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addItems">
                        <FaUtensils></FaUtensils>
                            Add Items</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageItems">
                        <FaList></FaList>
                            Manage Items({menu.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/users">
                        <FaUsers></FaUsers>
                            All Users</NavLink>
                    </li>
                      </>
                      :
                      <>
                    <li>
                        <NavLink to="/dashboard/userHome">
                        <FaHome></FaHome>   
                            User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                        <FaShoppingCart></FaShoppingCart>
                            My Cart({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/paymentHistory">
                        <FaRegAddressBook></FaRegAddressBook>
                            Payment History</NavLink>
                    </li>
                      </>
                   }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                        <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">
                        <FaElementor></FaElementor>
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                        <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                        <FaShopify></FaShopify>
                            Shop</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 py-10 px-10">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;