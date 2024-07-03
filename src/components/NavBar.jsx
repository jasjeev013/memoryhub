
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <>
        <Navbar expand="lg" className="custom-navbar  sticky-top" style={{ top: '18px' }}>
            <Navbar.Brand className='mx-4' href="#home">MemoryHub</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto justify-content-center w-90">
                    <Link className='text-color-black mx-4' to="/">Home</Link>
                    <Link className='text-color-black mx-4' to="/categories">Categories</Link>
                    <Link className='text-color-black mx-4' to="/about">About Us</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default NavBar
