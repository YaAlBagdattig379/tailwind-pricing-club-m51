import React, { useState } from 'react';
import Link from '../Link/Link';
import {Bars3Icon ,XMarkIcon} from '@heroicons/react/24/solid'
const Navbar = () => {
    const [open,setOpen] = useState(false);// state use for double burger icon
    const routes = [
        {id:1,name:'Home',link:'./home'},
        {id:2,name:'Shop',link:'./shop'},
        {id:3,name:'Deals',link:'./deals'},
        {id:4,name:'Coupons',link:'./Coupons'},
        {id:5,name:'Contact',link:'./contact'},
    ]
    return (
        <nav className='bg-indigo-200'>
            {/* state use for double burger icon */}
            <div onClick={()=> setOpen(!open)} className='w-6 h-6 md:hidden'> 
                {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon> }
            </div>
            {/* <ul className='md:flex justify-center'> */}
            <ul className={`md:flex justify-center absolute md:static  bg-indigo-200 w-full duration-700 ease-in ${open ? 'top-6':'top-[-120px]'}`}>
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