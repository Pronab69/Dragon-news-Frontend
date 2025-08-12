import React, { use, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Shownews from './Shownews';
import { Authcontext } from '../../Authprovider/Authcontext';

const Seenews = () => {
    const [filterdata,usefilterdata]=useState([])
    const {id} =useParams()
   const {setbreaking}=use(Authcontext)
    const data=useLoaderData()

 

useEffect(()=>{
   const breaking=data.filter(d=>d.others.is_trending===true)
setbreaking(breaking);

if(id==0){

      usefilterdata(data)
    }

    else if(id==1){
     const breakings=data.filter(d=>d.others.is_trending===true);  
  
        usefilterdata(breakings)
    }
    
else{
    const mydata= data.filter(d=>d.category_id==id)
    usefilterdata(mydata)
}

},[data,id,setbreaking])


    

   
    return (
        <div>
            <b>Dragon News Home</b>
           {filterdata.map(d=><Shownews d={d}></Shownews>)}
        </div>
    );
};

export default Seenews;