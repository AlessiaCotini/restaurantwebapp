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
      <Container className="my-5">
        <Row className="mb-4">
          <Col className="text-center">
            <h3
              className="fw-bold text-primary text-uppercase"
              style={{ letterSpacing: "2px" }}
            >
              Prenotazioni Correnti
            </h3>
            <div
              className="mx-auto bg-primary rounded"
              style={{ width: "60px", height: "4px" }}
            ></div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} lg={8}>
            <ListGroup className="shadow-sm rounded-4 overflow-hidden">
              {this.state.prenotazioni.map((reservation) => {
                return (
                  <ListGroup.Item
                    key={reservation._id}
                    className="d-flex justify-content-between align-items-center p-3 border-start-0 border-end-0 border-top-0"
                    style={{ transition: "background-color 0.3s" }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#f8f9fa")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#fff")
                    }
                  >
                    <div className="d-flex align-items-center">
                      <div
                        className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <span className="fw-bold">
                          {reservation.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h6 className="mb-0 fw-bold text-dark">
                          {reservation.name}
                        </h6>
                        <small className="text-muted">
                          <i className="bi bi-calendar-event me-1"></i>
                          {new Date(reservation.dateTime).toLocaleString(
                            "it-IT",
                            {
                              day: "2-digit",
                              month: "short",
                              hour: "2-digit",
                              minute: "2-digit",
                            },
                          )}
                        </small>
                      </div>
                    </div>

                    <div className="text-end">
                      <span className="badge rounded-pill bg-info-subtle text-info px-3 py-2">
                        {reservation.numberOfPeople}{" "}
                        {reservation.numberOfPeople === 1
                          ? "Persona"
                          : "Persone"}
                      </span>
                    </div>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>

            {this.state.prenotazioni.length === 0 && (
              <div className="text-center p-5 bg-light rounded-4 border border-dashed text-muted">
                Nessuna prenotazione trovata.
              </div>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Backoffice;
