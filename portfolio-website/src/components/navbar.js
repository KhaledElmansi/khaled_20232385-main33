import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import facebook from './image/blackfacebook.jpg'
import insta from './image/balckinsta.png'
import linked from './image/linkedinblack.png'

function KNavbar() {
  return (
    <Navbar expand="lg" variant="dark" className="bg-dark px-4" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home" className="fw-bold fs-2">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#top">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>

            <Nav.Link href="https://www.facebook.com/yourprofile" target="_blank">
                <img src={facebook} width="25" height="25" alt="facebook"/>
            </Nav.Link>

            <Nav.Link href="https://www.instagram.com/yourusername" target="_blank">
                <img src={insta} width="25" height="25" alt="instagram"/>
            </Nav.Link>

            <Nav.Link href="https://www.linkedin.com/in/yourname" target="_blank" className="me-3">
                <img src={linked} width="25" height="25" alt="linkedin"/>
            </Nav.Link>

            <Button 
              variant="outline-light" 
              className="fw-bold px-4" 
              style={{ borderRadius: '0' }}
            >
              Let's Connect
            </Button>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default KNavbar;