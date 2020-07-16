import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
    return (
        <>

            <Navbar style={{ backgroundColor: 'transparent' }}>

                <Nav className="mx-auto">
                    <Nav.Link href='#abc' className="nav">
                        Home
                    </Nav.Link>
                    <Nav.Link  className="nav">
                        About
                    </Nav.Link>
                    <Nav.Link  className="nav">
                        Contact
                    </Nav.Link>
                </Nav>
            </Navbar>

            
        </>
    )
}

export default NavBar
