
import SectionTitle from "./SectionTitle";
import MenuItem from "./MenuItem";
import useMenu from "../hooks/useMenu";

const PopularMenu = () => {

  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular')

  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 md:mt-5 px-5 lg:px-0">

        {popular.map((item) => (
          <MenuItem key={item.id} item={item}></MenuItem>
        ))}
        
      </div>
      <div className="flex justify-center items-center mt-10">
        <button className="btn btn-outline border-0 border-b-4 text-black text-center">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
