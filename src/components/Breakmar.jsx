import React, { use, useEffect, useState } from 'react';
import { Authcontext } from '../../Authprovider/Authcontext';

const Breakmar = () => {

    const{breaking}=use(Authcontext)

    const [breako,setbreak]=useState([])

    useEffect(()=>{

       const breaks=  breaking.map(b=>b.title)
       setbreak(breaks)
    },[breaking])
   
  
    return (
    
                   <marquee  behavior="" direction=""   >
                  {breako.join(" ||||| ")}

</marquee> 
 
    );
};

export default Breakmar;