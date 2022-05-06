import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);
    
     const handleSignOut = () => {
            signOut(auth)
            console.log(user)
        }
    
    return (
           <Navbar className='navbar' expand="lg">
                <Container>
                    <Navbar.Brand className='text-white fs-2'>
                       <span className='text-warning'>Fruits</span> Stock</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ms-4">
                    <Link className='link fs-5' to='/home'>Home</Link> 
                    <Link className='link fs-5' to='/blogs'>Blogs</Link>
                    {
                        user?.uid && <div>
                        <Link className='link fs-5' to='/myItem'> 
                           My Item
                        </Link>
                        <Link className='link fs-5' to='/addNewItem'>
                            Add Item
                        </Link>
                        <Link className='link fs-5' to='/manage'>
                            Manage Inventory
                        </Link>      
                        </div>
                    }
                    </Nav>
                    <Nav className="ms-auto ms-4">
                   { 
                      user?.uid? <button className='btn btn-link link fs-4' onClick={handleSignOut}>Sign Out</button> :<Link className='link fs-4' to='/login'>Sign In</Link> }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;