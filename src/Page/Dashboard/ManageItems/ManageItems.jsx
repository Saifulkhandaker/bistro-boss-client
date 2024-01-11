import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageItems = () => {

    const [menu, loading, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${id}`);
                if(res.data.deletedCount > 0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `Item has been deleted`,
                        icon: "success"
                    });
                }
                
            }
          });
    }

    return (
        <div>
            <SectionTitle
            heading="Manage All Items"
            subHeading="Hurry Up!"
            ></SectionTitle>
            <div className="border shadow-xl bg-white py-10 px-5 mt-5">
                <div className="flex justify-between">
                    <h2 className=" text-xl lg:text-3xl font-medium">Total Items: {menu.length}</h2>
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
                        <th>Update</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        menu.map((item, index) => <tr key={item._id}>
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
                            <td>
                                <Link to={`/dashboard/updateItem/${item._id}`}>
                                <button>
                                <FaEdit className="items-center text-4xl text-white bg-[#D1A054] py-2 pl-1 rounded-lg"></FaEdit>
                                </button> 
                                </Link>
                            </td>
                            <th>
                            <button onClick={() => handleDelete(item._id)} 
                            className="btn btn-ghost text-lg text-white bg-[#B91C1C] font-bold"><FaTrashAlt></FaTrashAlt>
                            </button>
                            </th>
                        </tr>)
                    }
                        
                    </tbody>
                    
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;