import React from 'react';
import PricingOptions from '../PringOptions/PricingOptions';

const Pricing = () => {
    const pricingOptions = [
        {id:1,name:'free',price:0},
        {id:2,name:'regular',price:232},
        {id:3,name:'premium',price:543}
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl text-white mb-5'>Best Deals of the Town</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quas illum rerum aliquid eius a perferendis laboriosam eaque unde culpa odio velit beatae, accusantium neque, vel aperiam tempore veritatis! Voluptate!
            Vero, molestias unde illum ut esse optio ratione. Accusantium, repellat exercitationem voluptatum odio voluptatem facere necessitatibus aperiam autem reprehenderit eveniet perspiciatis error officia fuga dolorem ex sunt vitae excepturi quae.
            Maxime, voluptate sunt! Officiis eos eligendi similique commodi soluta id quis quae repellat, voluptatum veritatis repudiandae mollitia omnis nam illum esse explicabo eum vel provident ducimus sit placeat consequatur! Natus?</p>
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