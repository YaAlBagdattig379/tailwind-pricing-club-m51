import React from 'react';

const PricingOptions = (props) => {
    const {name,price} = props.options;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h1 className='bg-indigo-300  py-2 rounded-lg text-xl font-bold'>{name}</h1>
            <span className='text-5xl font-bold'>{price}</span>
            <span className='font-bold text-xl text-gray-500'>/mon</span>
        </div>
    );
};

export default PricingOptions;