import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slieder1 from "../assets/home/slide1.jpg";
import slieder2 from "../assets/home/slide2.jpg";
import slieder3 from "../assets/home/slide3.jpg";
import slieder4 from "../assets/home/slide4.jpg";
import slieder5 from "../assets/home/slide5.jpg";
import SectionTitle from "./SectionTitle";

const Category = () => {
  return (
   <section className="">
    <SectionTitle
    subHeading={"From 11.00am to 10.00pm"}
    heading={"Order Online"}
    ></SectionTitle>
     <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={false}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-10 md:mb-20 lg:mb-24"
    >
      <SwiperSlide>
        <img src={slieder1} alt="" />{" "}
        <h3 className="md:text-4xl text-center -mt-16 text-white">SALADS</h3>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <img src={slieder2} alt="" />{" "}
        <h3 className="md:text-4xl text-center -mt-16 text-white">PIZZAS</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slieder3} alt="" />{" "}
        <h3 className="md:text-4xl text-center -mt-16 text-white">SOUPS</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slieder4} alt="" />{" "}
        <h3 className="md:text-4xl text-center -mt-16 text-white">DESSERTS</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slieder5} alt="" />{" "}
        <h3 className="md:text-4xl text-center -mt-16 text-white">SALADS</h3>
      </SwiperSlide>
    </Swiper>
   </section>
  );
};

export default Category;
