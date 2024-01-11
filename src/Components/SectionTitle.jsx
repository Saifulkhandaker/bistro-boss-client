;

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-3/6 lg:w-[35%] mx-auto text-center py-3">
            <p className="text-[#D99904] mb-2">--{subHeading}--</p>
            <p className=" lg:text-4xl uppercase border-y-4 py-2">{heading}</p> 
        </div>
    );
};

export default SectionTitle;