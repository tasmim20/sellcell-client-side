import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import {GoogleAuthProvider} from 'firebase/auth';



const Login = () => {
  const {signIn, providerLogin} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider()
  const navigate = useNavigate();
  const location =  useLocation();
  const from = location.state?.from?.pathname || '/'

  // https://sellcell-f5de6.web.app

  const handleGoogleSignIn = () =>{
    providerLogin(googleProvider)
    .then(result =>{
        const user = result.user;
        console.log(user);
        navigate(from, {replace: true});
    })
    .catch(error => console.error(error))
  }
  
  const handleSubmit = event =>{
    event.preventDefault();
    const form =event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then(result =>{
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, {replace: true});
    })
    .catch(error => console.error(error))
  }


    return (
     <div>
        <h2 className='text-4xl font-bold mt-10 text-center'>Safest & Trusted Marketplace</h2>
         <div className='flex justify-center text-black mb-14 mt-10'>
           <div className="card w-full max-w-lg shadow-2xl bg-green-50">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
            <h1 className='font-bold text-gray-500 text-3xl text-center my-6'>Login to buy & sell</h1>
            
          <label className="label">
            <span className="label-text text-black">Email Address</span>
          </label>
          <input name='email' type="email"  placeholder="email" className="input input-bordered border-zinc-900 bg-white"  required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered border-zinc-900 bg-white" required />
          <label className="label text-purple-700">
    
          </label>
        </div>
        <div className="form-control mt-4">
        <input type="submit"  className="btn btn-success" value="login"/>
        </div>
        <div className="divider">Or Log in with</div>
      </form>
    
      <div className='mb-4 flex justify-center  mx-8 -mt-6'>
      <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success text-bold w-full mx-4"><p className='px-2'><FaGoogle className='text-green-800 text-lg'></FaGoogle></p> Login with google</button>
       
        </div>
       <div className='flex justify-around mb-6 mx-8'>
       <p>Need an account..?</p>
           <p> <Link to='/signUp' className=" font-semibold">Register</Link></p>
       </div>
    </div>
        </div>
     </div>

    );
};

export default Login;