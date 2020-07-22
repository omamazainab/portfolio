import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {

    // const navbar = document.querySelector('#navbar');
    window.onscroll = () => {
        if (window.scrollY > 56) {
            document.querySelector('#navbar').classList.add('navbar-active');
            document.querySelectorAll('.nav').forEach(nav => {
                nav.classList.add('nav-active');
            });
        } 
        else {
            document.querySelector('#navbar').classList.remove('navbar-active');
            document.querySelectorAll('.nav').forEach(nav => {
                nav.classList.remove('nav-active');
            });
        }
    };

    return (
        <>

            <Navbar style={{ backgroundColor: 'transparent' }} sticky="top" id="navbar">

                <Nav className="mx-auto">
                    <Nav.Link href='#abc' className="nav">
                        Home
                    </Nav.Link>
                    <Nav.Link className="nav">
                        About
                    </Nav.Link>
                    <Nav.Link className="nav">
                        Contact
                    </Nav.Link>
                </Nav>
            </Navbar>


        </>
    )
}

export default NavBar
