import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle";
import MenuCategory from "./MenuCategory";


const Menu = () => {

  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === 'dessert');
  console.log(desserts);
  const soup = menu.filter(item => item.category === 'soup')
  const salad = menu.filter(item => item.category === 'salad')
  const pizza = menu.filter(item => item.category === 'pizza')
  const offered = menu.filter(item => item.category === 'offered')

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu" details="Would you like to try a dish?"></Cover>
      {/* main cover */}
      <div className="w-[90%] mx-auto">
        <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
      </div>
      {/* offerd menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory items={desserts} title={"dessert"} menuImg={dessertImg}></MenuCategory> 
      {/* pizza menu items */}
      <MenuCategory items={pizza} title={"pizza"} menuImg={pizzaImg}></MenuCategory>
      {/* salad menu items */}
      <MenuCategory items={salad} title={"salad"} menuImg={saladImg}></MenuCategory> 
      {/* soup menu items */}
      <MenuCategory items={soup} title={"soup"} menuImg={soupImg}></MenuCategory> 

     
    </div>
  );
};

export default Menu;
