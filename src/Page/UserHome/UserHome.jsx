import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useCart from "../../hooks/useCart";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";

const UserHome = () => {

    const {user} = useContext(AuthContext);
    const [cart] = useCart();

    const {data: payments = []} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <h1 className="text-[17px] md:text-3xl font-serif">HI, WELCOME BACK</h1>
            <div className="lg:flex justify-center mt-10">
                <div className="flex-1 flex flex-col py-10 px-8 lg:px-0 text-center items-center bg-[#FFEDD5]">
                    <img src={user?.photoURL} className="w-56 rounded-full border-2 border-[#D1A054]" alt="" />
                    <h1 className="text-xl font-serif pt-5">{user.displayName}</h1>
                </div>
                <div className="flex-1 flex flex-col py-10 px-8 lg:px-0 text-center items-center justify-center bg-[#FEF9C3]">
                    <h1 className="text-[20px] md:text-3xl font-serif">YOUR ACTIVITIES</h1>
                    <p className="pt-10 flex items-center text-lg gap-3 font-serif"><FaShoppingCart />Orders: {cart.length}</p>
                    <p className="flex items-center text-[16px] md:text-lg gap-3 font-serif"><MdOutlinePayment />Payment: {payments.length}</p>
                </div>

            </div>
        </div>
    );
};

export default UserHome;