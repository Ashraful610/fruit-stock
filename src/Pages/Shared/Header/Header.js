import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
           <Navbar className='navbar' expand="lg">
                <Container>
                    <Navbar.Brand className='text-white'>Fruits Stock</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Link className='link' to='/home'>Home</Link> 
                    <Link className='link' to='/blogs'>Blogs</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;