import React from 'react'
import logo from '../images/logo.svg'
import {Link} from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'


function NavigationBar() {

    return (
        <Navbar expand="lg" className='navbar'>
            <Navbar.Brand className='logo'>
                <Link to='/'>
                    <img src={logo} alt="Resort" />
                </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="basic-navbar-nav">
                <Nav className="nav-links">
                    <Nav.Link >
                        <Link to='/'>Home</Link>
                    </Nav.Link>
                    <Nav.Link >
                        <Link to='/rooms'>Rooms</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar
