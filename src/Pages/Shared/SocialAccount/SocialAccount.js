import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './SocialAccount.css'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';

const SocialAccount = () => {
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathName || '/'
   
    const handleGoogle = () => {
        signInWithPopup(auth , googleProvider)
        // toast.success('user successfully sign in with Google')
      navigate(from , {replace: true})

    }

    
    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         navigate('/')
    //     } else {
    //       // User is signed out
    //     }
    //   });

    return (
        <div>
            <div className='or-div  '>
                <div className='div'>
                    <hr className='line' />
                </div>
                <div> 
                    <span className='or'>or</span>
                </div>
                <div className='div'> 
                    <hr className='line'/>
                </div>
            </div>
            <Button variant='outline-warning' onClick={handleGoogle} className='google-btn'>
                Google
            </Button>
            <Toaster></Toaster>
        </div>
    );
};

export default SocialAccount;