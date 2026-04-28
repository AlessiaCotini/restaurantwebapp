import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function LibNavbar () {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Le letture del sognatore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Consigliati da noi</Nav.Link>
            <Nav.Link href="#link">Dove trovarci</Nav.Link>
            <NavDropdown title="Contatti" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Chiama</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Messaggia
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ordina</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Gift Card
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default LibNavbar ;