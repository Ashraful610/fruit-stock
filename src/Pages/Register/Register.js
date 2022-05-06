import React, { useEffect, useState } from 'react';
import './Register.css'
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialAccount from '../Shared/SocialAccount/SocialAccount';
import auth from '../../firebase.init';
import toast, { Toaster } from 'react-hot-toast';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, updateProfile } from 'firebase/auth';



const Register = () => {
  const [name , setName] = useState({value: '' , error:''})
  const [email , setEmail] = useState({value:'' , error:''})
  const [password  , setPassword] = useState({value:'' ,error:''})
  const [confrimPassword , setConfrimPassword] = 
    useState({value:'' , error:''})
  const [error , setError] = useState('')
  
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathName || '/'


// handle name
  const handleName = event => {
    const nameInput = event.target.value
    if(nameInput === ''){
      setName({value:'' , error:'Please enter name'})
    }
    else{
      setName({value:nameInput , error:''})
    }
    
  }
 
  // handle email
  const handleEmail = event => {
    const emailField = event.target.value
    if(/\S+@\S+\.\S+/.test(emailField)){
      setEmail({value:emailField , error:''})
    }
    else{
       setEmail({value:'' , error:'Please Provide a valid Email'})
    }
    
  }
  
  // handle password
  const handlePass = event => {
    const password = event.target.value
    if(password.length < 6){
      setPassword({value:'' , error:'password must be six character'})
    }
    else if (!/(?=.*[A-Z])/.test(password)){
      setPassword({value:'', error:'Password must be one capital latter'})
    }
    else{
      setPassword({value:password , error:''})
    }
   
  }
 
  // handle confirm password
  const handleConfirmPass = event => {
    const confirmPass = event.target.value 
    if(confirmPass !== password.value){
      setConfrimPassword({value:'', error:'Password Mismatched'})
    }
    else{
      setConfrimPassword({value:confirmPass ,error:''})
    }
  }
  
  // handle sign up
      const handleSignUp = event => {
      event.preventDefault()
      if(name.value === ''){
        setName({value:'' , error:'Name is required'})
      }
      if(email.value === ''){
        setEmail({value:'' , error:'Email is required'})
      }
      if(password.value === ''){
        setPassword({value:'',error:'Password is required'})
      }
      if(confrimPassword.value === ''){
        setConfrimPassword({value:'' , error:'Confirm password is required'})
      } 

       if(name.value && email.value && password.value && confrimPassword.value){
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then( () => {
          // toast.success('User successfully created')
          navigate(from , { replace:true })
          handleUpdateuser()
          handleVerification()
        })
        .catch(error => {
          const errorMessage = error.message;
          console.log(errorMessage)
          setError(error)
        });
     }
  }

    // user update
    const handleUpdateuser = () => {
     updateProfile(auth.currentUser,{
       displayName:name.value
     })
     .then(() => {
      //  toast.success('profile updated')
     })
    }

    // email verification
    const handleVerification = () => {
     sendEmailVerification(auth.currentUser)
    //  toast.success('send email verification code')
    }
    // console.log(user)

  
    // useEffect(()=>{
    //   onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         navigate('/')
    //     } else {
    //       // User is signed out  
    //     }
    //   });
    // },[])
     
    
   
   
    return (
        <div>
            <div className='signUp-form  shadow'>
            <h2 className='text-center text-white'>Please Sign Up</h2>
            <form className='p-4' onSubmit={handleSignUp}>
                <label htmlFor="name" className='text-white mb-2'>Name</label>
                <br />
                <input type="text" name="" placeholder='Enter name' 
               className='w-100 input-field mb-2' id=""
               onBlur={handleName} />
                <br />
                {
                  name.error && <p className='error'>{name.error}</p>
                }

                <label htmlFor="email" className='text-white mb-2'>Email</label>
                <br />
                <input type="email" name="" placeholder='Enter email' 
               className='w-100 input-field mb-2' id=""
               onBlur={handleEmail} required/>
               <br />
                {
                  email.error && <p className='error'>{email.error}</p>
                }

                <label htmlFor="password" className='text-white mb-2'>
                  Password
                </label>
                 <br />
                <input type="password" name="" placeholder='Enter password'   
                  className='w-100 input-field mb-2' id=""
                  onBlur={handlePass}  required/>
                  {
                    password.error && <p className='error'>{password.error }</p>                 
                  }

                <label htmlFor="confirmPassword" className='text-white mb-2'>Confirm Password</label> <br />
                <input type="password" name="" placeholder='Enter confirm password' className='w-100 input-field' id=""
                onBlur={handleConfirmPass} required />
                {
                  confrimPassword.error && <p className='error'>{confrimPassword.error }</p>  
                }

                  {
                    error?.message && <p className='error'>{error.message}</p>
                  }
                <div className='signUp-btn-div'>
                    <Button variant="outline-warning" className='signIn-btn'
                    onClick={handleSignUp}
                    >Sign Up</Button>
                </div>
                 <div>
                     <p className='already-account'>
                       Already have a account ? <Link to='/register' className='text-warning text-decoration-none'>Please sign in</Link>
                     </p>
                 </div> 
                 <SocialAccount></SocialAccount>
                <Toaster></Toaster>
            </form>
           
        </div>
        </div>
    );
}

export default Register  