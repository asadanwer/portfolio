import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
    return (
        <div >

  <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" className="fixed-top ">
  <Navbar.Brand href="#home">LAFARDO</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
    <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="#pricing">Shop</Nav.Link>
      <Nav.Link href="#pricing">ContactUs</Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default NavBar
