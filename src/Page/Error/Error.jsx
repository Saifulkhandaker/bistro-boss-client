import { Link } from 'react-router-dom';
import error from '../../assets/others/404.gif';

const Error = () => {
    return (
        <div className='w-[90%] mx-auto h-[60vh] mt-20 flex flex-col justify-center items-center text-center'>
            <img src={error} alt="" />
            <Link to="/">
                <button className='bg-green-400 text-white font-medium py-2 px-4'>GO HOME</button>
            </Link>
            
        </div>
    );
};

export default Error;