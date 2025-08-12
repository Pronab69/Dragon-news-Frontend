import React, { use } from 'react';
import { Authcontext } from '../../Authprovider/Authcontext';
import { Navigate, useLocation } from 'react-router';

const Privateroutes = ({children}) => {
const loc=useLocation()

    const {cuser,load}=use(Authcontext)
if(load){
    return  <span className="loading loading-spinner absolute left-[50%] top-[50%] loading-xl"></span>
}
    if(!cuser){
  return <Navigate state={loc.pathname} to={"/log"}></Navigate>
    }
    return children
      
    ;
};

export default Privateroutes;
