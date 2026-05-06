import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Menu = function () {
  const navigate = useNavigate();
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h1>La tua libreria online</h1>
          <div className="d-flex justify-content-between m-3">
            <Button
              className="p-5 m-1"
              variant="info"
              onClick={() => {
                navigate("/menu");
              }}
            >
              TUTTI I LIBRI DISPONIBILI PER TE
            </Button>
            <Button
              className="p-5 m-1"
              variant="warning"
              onClick={() => {
                navigate("/admin");
              }}
            >
              LETTURE DI GRUPPO
            </Button>
            <Button
              className="p-5 m-1"
              variant="success"
              onClick={() => {
                navigate("/prenota");
              }}
            >
              PRENOTAZIONI
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Menu;
