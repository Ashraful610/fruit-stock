import React from 'react';
import { Button } from 'react-bootstrap';
import './SocialAccount.css'
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SocialAccount = () => {
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathName || '/'
   
    const handleGoogle = () => {
        signInWithPopup(auth , googleProvider)
        .then(data => {
            toast.success('user successfully sign in with Google')
            console.log(data)
           navigate(from , {replace: true})
        })
    }

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
                <img src="https://i.ibb.co/2ZzPwMv/google-removebg-preview.png" alt=""  className='google-logo'/>
                
            </Button>
        </div>
    );
};

export default SocialAccount;