import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
          <h2 className='text-2xl'>Save most of your money</h2>
          <p className='text-5xl'>By giving your money to me.</p>  
        </div>
    );
};

export default Header;