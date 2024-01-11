import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart from "../hooks/useCart";



const Navber = () => {


  const {user, logOut} = useContext(AuthContext);
  const [cart] = useCart();

  // logout
  const handleLogOut = () => {
            logOut()
            .then()
            .catch()
      }

    const navlinks = <>
    <li className="text-sm"> <NavLink to="/">HOME</NavLink></li>   
    <li className="text-sm"> <NavLink to="/menu">OUR MENU</NavLink></li>   
    <li className="text-sm"> <NavLink to="/order/salad">ORDER FOOD</NavLink></li>
    <li className="text-2xl text-white text-center items-center">
       <NavLink to="/dashboard/cart">
       <button className="flex gap-2">
        <AiOutlineShoppingCart />
          <div className="badge badge-secondary">+{cart.length}</div>
        </button>
       </NavLink>
    </li> 
   
    </>

    return (
        <div className="navbar fixed z-10 bg-black bg-opacity-10 text-white max-w-screen-xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black text-white rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS <br /> RESTAURANT</a>
  </div>
  
  <div className="navbar-end gap-2">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navlinks}
    </ul>
  </div>
  {/* <p className="hidden md:block md:text-sm">{user?.displayName}</p> */}
    <img className="h-[55px] rounded-full" src={user?.photoURL} alt="" /> 
   
      {
        user ? 
        <Link to="/login">
          <button onClick={handleLogOut} className="btn bg-transparent border-none hover:bg-[#C8B090] rounded-sm text-white">LogOut</button>
        </Link>
        :
        <Link to="/login" >
        <button className="btn bg-transparent border-none hover:bg-[#C8B090] rounded-sm text-white">LogIn</button>
      </Link>
      }

  </div>
</div>
    );
};

export default Navber;