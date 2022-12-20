import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        {id:1,name:'HOMe',link:'./home'},
        {id:2,name:'Shop',link:'./shop'},
        {id:3,name:'Deals',link:'./deals'},
        {id:4,name:'Coupons',link:'./Coupons'},
        {id:5,name:'Contact',link:'./contact'},
    ]
    return (
        <nav>
            <ul>
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