import SectionTitle from "./SectionTitle";
import featured from "../assets/home/featured.jpg"


const Featured = () => {
    return (
        <div className="relative">
    <div className="featured-item relative bg-fixed text-white my-10 ">
        <div className="bg-black bg-opacity-50 ">
        <SectionTitle
            subHeading={"Check it out"}
            heading={"FEATURED ITEMS"}
        ></SectionTitle>
        </div>
        <div className="md:flex justify-center items-center py-8 px-16 lg:pb-20 lg:pt-12 lg:px-20 bg-black bg-opacity-50 hfu">
            <div>
                <img src={featured} alt="" />
            </div>
            <div className="md:ml-10  p-4">
                <p>Oct 23, 2023</p>
                <p>WHERE CAN I GET SOME?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className="btn btn-outline border-0 border-b-4 text-white">Read More</button>
            </div>
        </div>
    </div>
</div>

    );
};

export default Featured;