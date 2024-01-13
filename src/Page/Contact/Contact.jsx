import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import contactimg from "../../assets/contact/banner.jpg"
import SectionTitle from "../../Components/SectionTitle";
import { FaClock, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";


const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Contact</title>
            </Helmet>
            <Cover img={contactimg} title="CONTACT US" details="Would you like to try a dish?"></Cover>
            <div className="w-[90%] mx-auto">
                <SectionTitle subHeading={"Visit Us"} heading={"OUR LOCATION"}></SectionTitle>
                {/* contact information */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center items-center my-10">
                    <div className="text-center items-center flex flex-col justify-center border">
                        <p className="bg-[#D1A054] w-full flex flex-col items-center py-5"><FaPhoneVolume className="text-white text-3xl"/></p>
                        <div className="bg-[#F3F3F3] px-24 py-10 mb-[24px]">
                            <h3 className="text-lg font-medium pt-10">PHONE</h3>
                            <p className="font-medium text-[#444444] pb-10">+38 (012) 34 56 789</p>
                        </div>
                    </div>
                    <div className="text-center items-center flex flex-col justify-center border">
                        <p className="bg-[#D1A054] w-full flex flex-col items-center py-5"><FaLocationDot className="text-white text-3xl"/></p>
                        <div className="bg-[#F3F3F3] px-10 py-10 mb-[24px]">
                            <h3 className="text-lg font-medium pt-10">ADDRESS</h3>
                            <p className="font-medium text-[#444444] pb-10">123 ABS Street, Uni 21, Bangladesh</p>
                        </div>
                    </div>
                    <div className="text-center items-center flex flex-col justify-center border">
                        <p className="bg-[#D1A054] w-full flex flex-col items-center py-5"><FaClock className="text-white text-3xl"/></p>
                        <div className="bg-[#F3F3F3] px-20 py-7 mb-[24px]">
                            <h3 className="text-lg font-medium pt-10">WORKING HOURS</h3>
                            <p className="font-medium text-[#444444] pb-10">Mon - Fri: 08:00 - 22:00 <br />Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Contact;