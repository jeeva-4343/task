import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { IoLogoXbox } from "react-icons/io";
import "../Css/Navbar.css";

function Navibar() {
  return (
    <>
      <Navbar className="justify-content-center" expand="lg">
        <Container fluid className='Navi-container'>
          {/* Brand container moved to the left */}
          <Navbar.Brand as={Link} to="/" className="brand-container">
            <div>
              <IoLogoXbox size={50} className="brand-icon" />
              <span className="brand-name text">Codext</span>
            </div>
          </Navbar.Brand>
          {/* Toggle button moved to the right */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="justify-content-end" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto"> {/* Push items to the right */}
              <Nav.Link as={NavLink} to="/" exact className='navi-txt-clr'>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/services" className='navi-txt-clr'>Services</Nav.Link>
              <Nav.Link as={NavLink} to="/prices" className='navi-txt-clr'>Prices</Nav.Link>
              <Nav.Link as={NavLink} to="/testimonials" className='navi-txt-clr'>Testimonials</Nav.Link>
              <Nav.Link as={NavLink} to="/blog" className='navi-txt-clr'>Blog</Nav.Link>
              <Nav.Link as={NavLink} to="/free-trial" className='Freetrial navi-txt-clr'>FREE TRIAL</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navibar;
