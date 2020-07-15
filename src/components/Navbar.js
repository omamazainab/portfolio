import React from 'react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
    return (
        <>

            <Navbar style={{ backgroundColor: 'transparent' }}>

                <Nav className="mx-auto">
                    <Nav.Link href='#abc'>
                     Home
                    </Nav.Link>
                    <Nav.Link >
                        About
                    </Nav.Link>
                    <Nav.Link >
                        Contact
                    </Nav.Link>
                </Nav>
            </Navbar>

            
        </>
    )
}

export default NavBar
