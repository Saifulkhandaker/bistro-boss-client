

const Footer = () => {
    return (
        <div>
            <div className="lg:flex justify-center text-white">
                <div className="bg-[#1F2937] flex-1 py-16 lg:pr-28 text-center lg:text-right">
                  <h1 className="text-2xl pb-5">CONTACT US</h1>
                  <p>123 ABS Street, Uni 21, Bangladesh</p>
                  <p>+88 123456789</p>
                  <p>Mon - Fri: 08:00 - 22:00</p>
                  <p>Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className="bg-[#111827] flex-1 py-16 lg:pl-28 text-center lg:text-left">
                  <h1 className="text-2xl pb-5">FOLLOW US</h1>
                  <p>Join Us on Social Media</p>
                </div>
            </div>
            <div className="text-white text-xs lg:text-sm text-center bg-[#151515] py-2">
              <p>Copyright © CulinaryCloud. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;