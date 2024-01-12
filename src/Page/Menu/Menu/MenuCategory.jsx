import React from "react";
import MenuItem from "../../../Components/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, menuImg }) => {
  return (
    <div className="pt-8 mb-8">
        {title && <Cover img={menuImg} title={title} details="Would you like to try a dish?"></Cover>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 md:mt-5 px-5 pt-5 lg:px-0 my-12 w-[90%] mx-auto">

        {items.map((item) => (
          <MenuItem key={item.id} item={item}></MenuItem>
        ))}

      </div>
      <div className="text-center">
      <Link to={`/order/${title}`}>
      <button className="btn btn-outline border-0 border-b-4 text-black">Order Your Favourite Food</button></Link>
      </div>
    </div>
  );
};

export default MenuCategory;
