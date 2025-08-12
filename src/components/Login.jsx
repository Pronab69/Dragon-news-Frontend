import React, { use } from 'react';
import Head from './Head';
import { Link, Navigate, useLocation } from 'react-router';
import { Authcontext } from '../../Authprovider/Authcontext';
import { useNavigate } from 'react-router';
const Login = () => {
    const navigae=useNavigate()
const {handlelog}=use(Authcontext)
const loc=useLocation()

const handlesubmit=(e)=>{
e.preventDefault()
const email=e.target.email.value
const password=e.target.password.value
handlelog(email,password)
.then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  
      navigae(loc?.state || "/");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}



    return (
        <>
        <Head></Head>
         <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
  
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="text-center py-3">
      <h1 className="text-2xl font-bold">Login now!</h1>
      
    </div>
      <div className="card-body">
        <form onSubmit={handlesubmit} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div>Dont have any account?  <Link to={"/reg"} className="link underline">Register</Link></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
  </div>
</div>
        </>

    );
};

export default Login;