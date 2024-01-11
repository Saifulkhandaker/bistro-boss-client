import React from 'react';

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className='flex space-x-2 lg:space-x-4 gap-5'>
            <img className='w-[120px] rounded-tl-none rounded-tr-full rounded-br-full rounded-bl-full' src={image} alt="" />
            <div>
                <h3 className='uppercase text-[#737373] text-xs md:text-sm lg:text-lg'>{name}----------------</h3>
                <p className='text-[#737373] text-xs md:text-sm lg:text-lg'>{recipe}</p>
            </div>
            <p className='text-[#BB8506] text-lg'>${price}</p>
            
        </div>
    );
};

export default MenuItem;