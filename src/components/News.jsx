import React, { use } from 'react';
import { NavLink, Outlet } from 'react-router';
import Righ from './Righ';

const mycata=fetch("../categories.json")
.then(res=>res.json())

const News = () => {
const cata=use(mycata)

    return (
        <div className='grid gap-4 grid-cols-12'>
            <div className='md:col-span-2 col-span-12'>
                <div className='sticky top-0'> <b> All Catagory</b>
            <br />
            <div className='flex flex-row gap-2 flex-wrap  md:flex-col'> {
                cata.map(c=><NavLink to={`/see/${c.id}`} className={" items-center justify-center bg-base-300  px-3 py-2 text-center"}>{c.name}</NavLink>)
            }</div>
           </div>
               
            </div>
          
            <div className='col-span-8'>
                
                  <Outlet></Outlet></div>
            <div className='col-span-2'>
                <Righ></Righ>



            </div>
        </div>
    );
};

export default News;