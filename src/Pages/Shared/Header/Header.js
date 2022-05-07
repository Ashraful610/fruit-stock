import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import CustomLink from '../CustomLink/CustomLink';
import toast from 'react-hot-toast';


const Header = () => {
    const [user] = useAuthState(auth);
    
     const handleSignOut = () => {
            signOut(auth)
            toast.success('User successfully sign out')
        }
    
    return (
           <Navbar className='navbar' expand="lg">
                <Container>
                    <Navbar.Brand className='text-white fs-2'>
                       <span className='text-warning'>Fruits</span> Stock</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ms-4">
                   <CustomLink className='link fs-5' to='/home'>
                       Home
                    </CustomLink> 
                   <CustomLink className='link fs-5' to='/blogs'>
                       Blogs
                    </CustomLink>
                    {
                        user?.uid && <div className='hideLink'>
                       <CustomLink className='link fs-5' to='/myItem'> 
                           My Item
                        </CustomLink>
                       <CustomLink className='link fs-5' to='/addNewItem'>
                            Add Item
                        </CustomLink>
                       <CustomLink className='link fs-5' to='/manage'>
                            Manage Inventory
                        </CustomLink>      
                        </div>
                    }
                    </Nav>
                    <Nav className="ms-auto ms-4">
                   { 
                      user?.uid? <button className='btn btn-link link fs-4' onClick={handleSignOut}>Sign Out</button> :
                      <CustomLink className='link fs-4' to='/login'>
                          Sign In
                     </CustomLink> }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;