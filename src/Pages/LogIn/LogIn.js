import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialAccount from '../Shared/SocialAccount/SocialAccount';
import './LogIn.css'

const LogIn = () => {
    return (
        <div className='form  shadow'>
            <h2 className='text-center text-white'>Please Sign In</h2>
            <div className='p-4'>
                <label htmlFor="email" className='text-white mb-2'>Email</label><br />
                <input type="email" name="" placeholder='Enter email' 
               className='w-100 input-field mb-2' id="" />
                <br />

                <label htmlFor="password" className='text-white mb-2'> Password</label> <br />
                <input type="password" name="" placeholder='Enter password'   
                  className='w-100 input-field' id="" />

                <div className='signUp-btn-div'>
                    <Button variant="outline-warning" className='signIn-btn'>Sign In</Button>
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