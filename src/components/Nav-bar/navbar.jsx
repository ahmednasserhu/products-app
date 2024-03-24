import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import ShoppingCart from "../cart/cart";
import profile from '../profile/profile'
import "./navbar.css";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              className="link-style"
              activeClassName="active-link"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/register"
              className="link-style"
              activeClassName="active-link"
            >
              Register
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/cart"
              className="link-style"
              activeClassName="active-link"
            >
              {ShoppingCart}
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to='/profile'
              className="link-style"
              activeClassName="active-link"
            >
              {profile}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
