import { format } from 'date-fns';
import React from 'react';

const Nav = () => {
    return (
        <div className='text-center'>
            <img  className='mx-auto w-1/3 mt-10' src="logo.png" alt="" />
            <p className='mt-2'>Journalism Without Fear or Favour</p>
            <p className='mt-2'>{format(new Date(), "EEEE , MMMM d , uu" )}</p>
      
        </div>
    );
};

export default Nav;