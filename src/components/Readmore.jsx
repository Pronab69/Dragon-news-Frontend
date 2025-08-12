import React from 'react';
import { Navigate, useLoaderData, useNavigate, useParams } from 'react-router';
import Nav from './Nav';
import Righ from './Righ';

const Readmore = () => {
    const {id}=useParams()
    const data=useLoaderData()
  const findd=  data.find(d=>id===d.id)


  const Navigate = useNavigate()
    return (
        <>
            <Nav></Nav>
            <div className='grid grid-cols-12 w-10/12 mx-auto'>
<div className='col-span-10'> 
    <b>Dragon News</b>
       <img className='my-3' src= {findd?.image_url} alt="" />
          <b className=''>{findd?.title}</b>
          <p className='my-4'>{findd?.details}</p>
          <button className='btn bg-[#D72050]' onClick={()=>Navigate("/")}>Go to Home</button>
          
       </div>
    
<div className='col-span-2'><Righ></Righ></div>
            </div>
        
           
        </>
    );
};

export default Readmore;
