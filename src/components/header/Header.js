import React from 'react';
import './Header.css'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
const Header = () => {
    return (

        <div>
            <div className='header'>
            <h1>LEARNERA</h1>
            <h3>Welcome to the World of Learning</h3>
            </div>
        
        {/* Import Navbar From Bootstrap */}
  
        <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link> 
        <NavDropdown title="Categories" id="basic-nav-dropdown">
        <NavDropdown.Item href="#web-development/3.1">Web Development</NavDropdown.Item>
        <NavDropdown.Item href="#programming/3.2">Programming</NavDropdown.Item>
        <NavDropdown.Item href="#electrical/3.3">Electreical Circuits</NavDropdown.Item>
        <NavDropdown.Item href="#micro-controller/3.3">Micro Controllers</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#others/3.4">Others</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link">Courses</Nav.Link>
        </Nav>
        <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
        </Form>
        </Navbar.Collapse>
        </Navbar>


</div>
    );
};

export default Header;