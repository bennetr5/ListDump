import { Link, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function AppNavbar() {
    const location = useLocation();
  
    const linkClass = (path) =>
      location.pathname === path ? "text-white" : "text-secondary";
  
    return (
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="py-3">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-4" >
            ListDump
          </Navbar.Brand>
            <Nav className="ms-3">
              <Nav.Link as={Link} to="/manage" className={linkClass("/manage")}>
                Manage
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className={linkClass("/login")}>
                Login
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    );
}