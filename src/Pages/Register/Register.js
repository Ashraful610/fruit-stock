import React from 'react';
import './Register.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialAccount from '../Shared/SocialAccount/SocialAccount';

const Register = () => {
    return (
        <div>
            <div className='signUp-form  shadow'>
            <h2 className='text-center text-white'>Please Sign Up</h2>
            <div className='p-4'>
                <label htmlFor="name" className='text-white mb-2'>Name</label><br />
                <input type="text" name="" placeholder='Enter name' 
               className='w-100 input-field mb-2' id="" />
                <br />

                <label htmlFor="email" className='text-white mb-2'>Email</label><br />
                <input type="email" name="" placeholder='Enter email' 
               className='w-100 input-field mb-2' id="" />
                <br />

                <label htmlFor="password" className='text-white mb-2'> Password</label> <br />
                <input type="password" name="" placeholder='Enter password'   
                  className='w-100 input-field mb-2' id="" />

                <label htmlFor="confirmPassword" className='text-white mb-2'>Confirm Password</label> <br />
                <input type="password" name="" placeholder='Enter confirm password'   
                  className='w-100 input-field' id="" />

                <div className='signUp-btn-div'>
                    <Button variant="outline-warning" className='signIn-btn'>Sign Up</Button>
                </div>
                 <div>
                     <p className='already-account'>
                       Already have a account ? <Link to='/register' className='text-warning text-decoration-none'>Please sign in</Link>
                     </p>
                 </div> 
                 <SocialAccount></SocialAccount>

            </div>
           
        </div>
        </div>
    );
};

export default Register;