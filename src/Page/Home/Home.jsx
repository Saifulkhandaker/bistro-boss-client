import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner";
import Category from "../../Components/Category";
import Chef from "../../Components/Chef";
import Featured from "../../Components/Featured";
import PopularMenu from "../../Components/PopularMenu";
import Testimonials from "../../Components/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Chef></Chef>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
