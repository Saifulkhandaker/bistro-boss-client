import img from "../../src/assets/others/cupcake-dribbble.gif"
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation()

    if(loading || isAdminLoading){
        return <div className="flex justify-center items-center ">
            <img className="flex" src={img} alt="" />
        </div>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate state={location.pathname} to="/"></Navigate>
};
export default AdminRoute;