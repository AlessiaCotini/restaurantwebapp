import { Component } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
const link = "https://striveschool-api.herokuapp.com/api/reservation";
class Backoffice extends Component {
  state = {
    prenotazioni: [],
  };
  getPrenotazioni = function () {
    fetch(link)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((arrPrenotazioni) => {
        console.log(arrPrenotazioni);
        this.setState({
          prenotazioni: arrPrenotazioni,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    //è un metodo riservato nei componenenti a classe, quale è il suo comportamento?
    //viene lanciato una sola volta dp la prima invocazione di render
    this.getPrenotazioni();
    //in questo modo non rientriamo nel loop infinito
  }
  //render viene lanciato all'avvio del componente
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h3>Prenotazioni</h3>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} lg={6}>
            <ListGroup>
              {this.state.prenotazioni.map((reservation) => {
                return (
                  <ListGroup.Item key={reservation._id}>
                    {reservation.name} per {reservation.numberOfPeople} alle{" "}
                    {reservation.dateTime}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Backoffice;
