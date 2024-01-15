import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import Menu from "../Page/Menu/Menu/Menu";
import Order from "../Page/Order/Order/Order";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Page/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Page/Dashboard/AllUsers/AllUsers";
import AddItems from "../Page/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Page/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Page/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Page/Dashboard/Payment/Payment";
import PaymentHistory from "../Page/Dashboard/PaymentHistory/PaymentHistory";
import Contact from "../Page/Contact/Contact";
import UserHome from "../Page/UserHome/UserHome";
import Error from "../Page/Error/Error";


const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "/order/:category",
                element: <Order></Order>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }

        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute>
            <Dashboard></Dashboard>
        </PrivateRoute>,
        children: [
            // normal user routes
            {
                path: "cart",
                element: <Cart></Cart>
            },
            {
                path: "userHome",
                element: <UserHome></UserHome>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory></PaymentHistory>
            },

            // addmin only routes
            {
                path: 'addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItems></ManageItems> </AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute><UpdateItem></UpdateItem> </AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path: 'users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
])

export default Route;