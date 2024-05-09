import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom'; // Import Link and NavLink from react-router-dom
import { IoLogoXbox } from "react-icons/io";
import "../Css/Navbar.css"; // Import custom CSS file for styling

function Navibar() {
  return (
    <>
      <Navbar className="justify-content-center" expand="lg"> {/* Use justify-content-center to center content */}
        <Container className='Navi-container'>
          <Navbar.Brand as={Link} to="/" >
            <div className="brand-container">
              <IoLogoXbox size={50} className="brand-icon" />
              <span className="brand-name text">Codext</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" /> {/* Add Navbar.Toggle for responsive behavior */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navi-left"> {/* Use ms-auto to push items to the right */}
              <Nav.Link as={NavLink} to="/" exact className='navi-txt-clr'>Home</Nav.Link> {/* Use NavLink for active styling */}
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
