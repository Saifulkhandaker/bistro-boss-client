import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import contactimg from "../../assets/contact/banner.jpg"
import SectionTitle from "../../Components/SectionTitle";
import { FaClock, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { useRef } from "react";
import Swal from "sweetalert2";


const Contact = () => {


    const formRef = useRef();

    const handlemessage = (e) => {
        e.preventDefault();
        Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Message Sent Successfully..!",
        showConfirmButton: false,
        timer: 1500
        });
        
        // Reset the form
        formRef.current.reset();
    }

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
                <SectionTitle subHeading={"Send Us a Message"} heading={"CONTACT FORM"}></SectionTitle>
                {/* contact form */}
                    <form onSubmit={handlemessage} ref={formRef} className="bg-white border px-4 py-5 mt-12 mb-20">
                        <div className="flex gap-5">
                            <input
                            type="text"
                            required
                            placeholder="Enter Name"
                            className=" w-full bg-[#F4F5F8] px-10 py-7 input  rounded-none"
                            />
                            <input
                            type="email"
                            required
                            placeholder="Enter Email"
                            className=" w-full bg-[#F4F5F8] px-10 py-7 input  rounded-none"
                            />
                        </div>
                        <div className="flex gap-5 mt-5">
                            <input
                            type="text"
                            required
                            placeholder="Enter Subject"
                            className=" w-full bg-[#F4F5F8] px-10 py-7 input  rounded-none"
                            />
                            <input
                            type="number"
                            placeholder="Enter Phone"
                            required
                            className=" w-full bg-[#F4F5F8] px-10 py-7 input  rounded-none"
                            />
                        </div>
                        <div className="mt-5">
                            <textarea
                            required
                            className="bg-[#F4F5F8] w-full px-10 py-7"
                            placeholder="Enter Message"
                            name=""
                            id=""
                            rows="5"
                            ></textarea>
                        </div>
                        <div className="mt-4 flex justify-center items-center">
                            <button className="py-4 px-5 rounded-none flex items-center text-center gap-2 text-xl text-white bg-[#c79953] ">
                             Send Message <IoIosSend />
                            </button>
                        </div>
                    </form>
            </div>
            
        </div>
    );
};

export default Contact;