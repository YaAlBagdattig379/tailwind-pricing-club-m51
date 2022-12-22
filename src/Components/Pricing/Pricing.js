import React from 'react';
import PricingOptions from '../PringOptions/PricingOptions';

const Pricing = () => {
    const pricingOptions = [
        {id:1,name:'free',price:0,benefits :[
         'liftetime free',
         'unlimited deals',
         'localized deals',
         'fantastic deals',
         'crazy deals'
        ]},
        {id:2,name:'regular',price:99.3,benefits:[
            'everything on regular ',
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals' 
        ]},
        {id:3,name:'premium',price:32.39,benefits:[
            'everything on premium ',
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals' 
        ]}
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl text-white mb-5'>Best Deals of the Town</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quas illum rerum aliquid eius a perferendis laboriosam eaque unde culpa odio velit beatae, accusantium neque, vel aperiam tempore veritatis! Voluptate!
            Vero, molestias unde illum ut esse optio ratione. Accusantium, repellat exercitationem voluptatum odio voluptatem facere necessitatibus aperiam autem reprehenderit eveniet perspiciatis error officia fuga dolorem ex sunt vitae excepturi quae ?</p>
          <div className='grid md:grid-cols-3 gap-3 mt-9'>
            {
                pricingOptions.map(options => <PricingOptions
                key ={options.id}
                options = {options}
                ></PricingOptions>)
            }
          </div>        
        </div>
    );
};

export default Pricing;<h1 className='text-5xl'>Best Deals of the Town</h1>