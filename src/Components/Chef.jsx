import chef from "../assets/home/chef-service.jpg"

const Chef = () => {
    return (
        <div className="relative">
        <img src={chef} alt="" />
        <div className="absolute text-center w-11/12 md:w-3/4 lg:w-3/6 mx-auto bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:py-3 lg:py-10">
            <h1 className="text-lg md:text-3xl uppercase">Bistro Boss</h1>
            <p className="text-xs md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
        </div>
    </div>
    
    
    
    
    );
};

export default Chef;