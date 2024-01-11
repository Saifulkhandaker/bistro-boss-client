import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";


const FoodCard = ({item}) => {
    const {name, image, recipe, price, _id} = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
      if(user && user.email){
        // send cart item to the database
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price
        }
        axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
            // refetch cart to update the cart items count
            refetch();
          }
        })
      }
      else{
        Swal.fire({
          title: "You are not logged in..!",
          text: "Please login to add food to the cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login"
        }).then((result) => {
          if (result.isConfirmed) {
            // send the user to the login page
            navigate('/login', {state: {from: location}})
          }
        });
      }
    }

  return (
    <div className="card bg-[#F3F3F30] border rounded-none my-10">
      <figure className="">
        <img
          src={image}
          alt="Shoes"
          className="w-full h-64"
        />
        <h2 className="absolute right-3 top-3 card-title bg-[#111827] text-white px-2 py-2">${price}</h2>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button onClick={handleAddToCart} className="btn btn-outline border-0 border-b-4 text-[#BB8506]">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;