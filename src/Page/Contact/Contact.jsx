import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import contactimg from "../../assets/contact/banner.jpg"
import SectionTitle from "../../Components/SectionTitle";


const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Contact</title>
            </Helmet>
            <Cover img={contactimg} title="CONTACT US" details="Would you like to try a dish?"></Cover>
            <div className="w-[90%] mx-auto">
                <SectionTitle subHeading={"Visit Us"} heading={"OUR LOCATION"}></SectionTitle>
            </div>
            
        </div>
    );
};

export default Contact;