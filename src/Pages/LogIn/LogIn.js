import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialAccount from '../Shared/SocialAccount/SocialAccount';
import './LogIn.css'

const LogIn = () => {
    const [email , setEmail] = useState('')
    const [password  , setPassword] = useState('')
    const [error , setError] = useState('')

    const [user , loading , error1] = useAuthState(auth)
    
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";


   const handleEmail = event => {
       setEmail(event.target.value)
   }
   const handlePassword = event => {
       setPassword(event.target.value)
   }

    const handleSignIn = () => {
         signInWithEmailAndPassword(auth, email, password)
        .then(() => {
         console.log('user sign in')
        toast.success('user successfully sign in') 

        })
        .catch(error => {
           setError(error)
        });
    }

    if(user){
        navigate(from, { replace: true });
    }
   
    return (
        <div className='form  shadow'>
            <h2 className='text-center text-white'>Please Sign In</h2>
            <div className='p-4'>
                <label htmlFor="email" className='text-white mb-2'>Email</label><br />
                <input type="email" name="" placeholder='Enter email' 
               className='w-100 input-field mb-2' id="" onBlur={handleEmail} />
                <br />

                <label htmlFor="password" className='text-white mb-2'> Password</label> <br />
                <input type="password" name="" placeholder='Enter password'   
                  className='w-100 input-field' id="" onBlur={handlePassword} />

               {
                   error && <p className='error'>{error.message}</p>
               }
                <div className='signUp-btn-div'>
                    <Button variant="outline-warning" className='signIn-btn'
                    onClick={handleSignIn}>
                        Sign In
                    </Button>
                </div>
                 <div>
                     <p className='no-account'>
                         No Account ? <Link to='/register' className='text-warning text-decoration-none'>create a account</Link>
                     </p>
                 </div> 
                 <SocialAccount></SocialAccount>

            </div>
           
        </div>
    );
};

export default LogIn;