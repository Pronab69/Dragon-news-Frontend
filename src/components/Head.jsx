import React, { use } from 'react';
import { Link, Links } from 'react-router';
import { Authcontext } from '../../Authprovider/Authcontext';

const Head = () => {
    const {cuser,Sighnout}=use(Authcontext)

    const signout=()=>{
        Sighnout()
        .then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

    }
    return (
        
        <div className=' flex items-center justify-between'>
            <div className='md:flex hidden'></div>
            <ul className='flex gap-2 justify-center'>
<li><Link to={"/"}>Home</Link></li>
<li>Home</li>
<li>Home</li>

            </ul>
            <div className='flex gap-2 justify-end'>
         { cuser 
  ? (cuser.displayName? cuser.displayName : "user") 
  : null // or "Please log in", or nothing
}

             <img className='w-10 h-10' src=  {cuser?.photoURL?cuser.photoURL:"demo-user.png"}  alt="" />
            {cuser? <button onClick={signout} className='btn bg-[#403F3F] text-white'>Sign out</button>:   <Link to={"/log"} className='btn bg-[#403F3F] text-white'>Login</Link>}
            
         </div>
        </div>
    );
};

export default Head;