import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";


const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();



    const {data: payments = []} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })

    return (
        <>
            <SectionTitle
            heading="payment History"
            subHeading="At a Glance!"
            ></SectionTitle>
            <div className="border shadow-xl bg-white py-10 px-5 mt-5">
      <div className="flex justify-between">
        <h2 className=" text-xl lg:text-3xl font-medium">Total Payments: {payments.length}</h2>
      </div>
      {/* items table */}
      <div className="overflow-x-auto mt-4">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D1A054] text-white rounded-t-full">
            <tr>
              <th>#</th>
              <th>EMAIL</th>
              <th>Transaction Id</th>
              <th>PRICE</th>
              <th>PAYMENT DATE</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
           {
            payments.map((payment, index) => <tr key={payment._id}>
                <th>
                 { index+1 }
                </th>
                <td className="text-xs md:text-sm lg:text-lg p-0">{payment.email}</td>
                <td>{payment.transectionId}</td>
                <td>${payment.price}</td>
                <th>{payment.date}</th>
                <th>{payment.status}</th>
              </tr>)
           }
            
          </tbody>
          
        </table>
      </div>
    </div>
        </>
    );
};

export default PaymentHistory;