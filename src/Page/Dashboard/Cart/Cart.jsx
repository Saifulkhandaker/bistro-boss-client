import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle";
import { Link } from "react-router-dom";


const Cart = () => {
  const [cart, refetch] = useCart();
  const price = cart.reduce((total, item) => total + item.price, 0);
  const totalPrice = price.toFixed(2)
  const axiosSecure = useAxiosSecure();

    //delete item
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          })
          .then((result) => {
            if (result.isConfirmed) {
            axiosSecure.delete(`/carts/${id}`)
            .then(res => {
                if(res.data.deletedCount > 0){
                    refetch();
                      Swal.fire({
                        title: "Deleted!",
                        text: "Order Item Deleted",
                        icon: "success"
                    });
                }
            })
            }
          });
    }


  return (
    <>
    <SectionTitle
    heading="My Orders"
    subHeading="Excellent Ambience"
    >
    </SectionTitle>
    <div className="border shadow-xl bg-white py-10 px-5 mt-5">
      <div className="flex justify-between">
        <h2 className=" text-xl lg:text-3xl font-medium">Total orders: {cart.length}</h2>
        <h2 className=" text-xl lg:text-3xl font-medium">Total orders: ${totalPrice}</h2>
       {cart.length ? <Link to="/dashboard/payment">
        <button className="btn">Pay</button>
        </Link> :
        <button disabled className="btn">Pay</button>}
      </div>
      {/* items table */}
      <div className="overflow-x-auto mt-4">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D1A054] text-white rounded-t-full">
            <tr>
              <th>#</th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
           {
            cart.map((item, index) => <tr key={item._id}>
                <th>
                 { index+1 }
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-xs md:text-sm lg:text-lg p-0">{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button onClick={() => handleDelete(item._id)} 
                   className="btn btn-ghost text-xl text-red-600 font-bold"><FaTrashAlt></FaTrashAlt>
                   </button>
                </th>
              </tr>)
           }
            
          </tbody>
          
        </table>
      </div>
    </div>
    </>
  );
};

export default Cart;
