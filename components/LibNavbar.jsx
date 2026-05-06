import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
function LibNavbar() {
  // const navigate = useNavigate();
  //navigate('/')
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary p-0">
        <Container fluid style={{ backgroundColor: "#1e5a05d0" }}>
          <Link className="navbar-brand" to="/">
            Libreria
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/prenota" className="nav-link">
                Prenota una lettura di gruppo
              </Link>
              <Link to="/admin" className="nav-link">
                Prenotazioni
              </Link>
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

export default LibNavbar;
