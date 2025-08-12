import React, { use } from 'react';
import Head from './Head';
import { Link } from 'react-router';
import { Authcontext } from '../../Authprovider/Authcontext';
import { signOut } from 'firebase/auth';
import { Auth } from '../../firebase.init';

const Reg = () => {
const {handlereg,upProfile}=use(Authcontext)
const handlesub=(e)=>{
e.preventDefault()
const email=e.target.email.value
const name=e.target.name.value
const photo=e.target.photo.value
const password=e.target.password.value

handlereg(email,password)
.then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
   
    signOut(Auth)
   return upProfile(name,photo)
    .then(() => {

  // ...
}).catch((error) => {
  // An error occurred
  // ...
});

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

    return (
        <>     <Head></Head>
          <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <b className='text-center py-2'>REGISTER</b>
      <div className="card-body">
        <form onSubmit={handlesub} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label" >Name</label>
          <input type="text" name='name' required className="input" placeholder="Name" />
          <label className="label">Photo URL</label>
          <input type="text" name='photo'  className="input" placeholder="Photo Url" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <div>Alredy have a account ?  <Link className='underline' to={"/log"}>Login</Link></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
      </div>
    </div>
  </div>
</div>

</>

    );
};

export default Reg;
