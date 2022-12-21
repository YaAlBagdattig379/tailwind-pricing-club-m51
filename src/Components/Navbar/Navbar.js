import React from 'react';
import Link from '../Link/Link';
import {Bars3Icon } from '@heroicons/react/24/solid'
const Navbar = () => {
    const routes = [
        {id:1,name:'Home',link:'./home'},
        {id:2,name:'Shop',link:'./shop'},
        {id:3,name:'Deals',link:'./deals'},
        {id:4,name:'Coupons',link:'./Coupons'},
        {id:5,name:'Contact',link:'./contact'},
    ]
    return (
        <nav>
            <div className='w-6 h-6 md:hidden'> 
                <Bars3Icon></Bars3Icon>
            </div>
            <ul className='md:flex justify-center'>
                {
                    routes.map(route => <Link
                    key= {route.id}
                    route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;