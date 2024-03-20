import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import './navbar.css'

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/' className="link-style" activeClassName="active-link">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to='/register' className="link-style" activeClassName="active-link">
              Register
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
