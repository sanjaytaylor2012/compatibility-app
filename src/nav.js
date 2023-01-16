import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function NavBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand>Astrologer</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Test Compatibility</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
