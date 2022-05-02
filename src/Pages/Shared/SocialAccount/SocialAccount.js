import React from 'react';
import { Button } from 'react-bootstrap';
import './SocialAccount.css'

const SocialAccount = () => {
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
            <Button variant='outline-warning' className='google-btn'>
                Google
            </Button>
        </div>
    );
};

export default SocialAccount;