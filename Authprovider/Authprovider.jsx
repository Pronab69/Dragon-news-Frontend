import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Auth } from '../firebase.init';
import { Authcontext } from './Authcontext';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const Authprovider = ({children}) => {
const [breaking,setbreaking]=useState([])

    const [load,setload]=useState(true)
const [cuser,setuser]=useState(null)
const handlereg=(email,password)=>{
setload(true)

  return  createUserWithEmailAndPassword(Auth, email, password)

}

const signwithGoogle=()=>{

   return signInWithPopup(Auth, provider)
}

const handlelog=(email,password)=>{
setload(true)
    return signInWithEmailAndPassword(Auth, email, password)
}

useEffect(()=>{
const unsub = onAuthStateChanged(Auth, (user) => {
setuser(user)
setload(false)
});
return()=> unsub()
},[])

const upProfile=(name,photo)=>{

   return updateProfile(Auth.currentUser, {
  displayName: name, photoURL: photo
})
}

const Sighnout=()=>{
    setload(true)
   return signOut(Auth)
}

   const userinfo={handlereg,handlelog,cuser,Sighnout,load,upProfile,signwithGoogle,setbreaking,breaking}
    return (
        <div>
            <Authcontext value={userinfo}>  {children}</Authcontext>
          
        </div>
    );
};

export default Authprovider;
