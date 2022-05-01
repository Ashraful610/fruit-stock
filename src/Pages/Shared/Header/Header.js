import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
           <Navbar className='navbar' expand="lg">
                <Container>
                    <Navbar.Brand className='text-white fs-2'>
                       <span className='text-warning'>Fruits</span> Stock</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ms-4">
                    <Link className='link fs-4' to='/home'>Home</Link> 
                    <Link className='link fs-4' to='/blogs'>Blogs</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;