import { ArrowRightIcon} from '@heroicons/react/24/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOptions = (props) => {
    const {name,price,benefits} = props.options;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h1 className='bg-indigo-300  py-2 rounded-lg text-xl font-bold'>{name}</h1>
            <p>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='font-bold text-xl text-gray-500'>/mon</span>
            </p>
            <div>
                <h3 className='text-2xl font-bold text-left'>Benefits</h3>
                {
                    benefits.map(benefit => <Benefit 
                        benefit = {benefit}
                    ></Benefit>)
                }
            </div>
            <button className='bg-green-500 rounded mt-5 text-white flex justify-center gap-2 w-full py-2 hover:text-green-700 font-bold'>
                Buy Now <ArrowRightIcon className='w-6 h-6 '></ArrowRightIcon>
            </button>

        </div>
    );
};

export default PricingOptions;