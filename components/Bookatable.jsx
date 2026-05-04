//ogni volta che un componente possiede un campo input ci sarà bisogno di uno state
import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";

//oggetto prenotazione: COSA CI SERVE?
//NAME, PHONE, NUMBER OF PEOPLE, SMOKING, TIME, REQUESTS(non required)
//
const link = "https://striveschool-api.herokuapp.com/api/reservation";
class Bookatable extends Component {
  state = {
    //memorizzo info che collegano la logica con l'interfaccia-TENIAMO TRACCIA DEI VALORI DEL FORM DURANTE LA COMPILAZIONE
    prenotazioni: {
      //traccio il valore degli input
      name: "",
      phone: "",
      numberOfPeople: "",
      smoking: false,
      dateTime: "",
      specialRequests: "",
      //colleghiamo input per input allo stato
    },
  };

  render() {
    return (
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="p-4 p-md-5 border-0 shadow-lg rounded-4 bg-white">
              <h2 className="text-center fw-bold mb-4 text-primary">
                Prenota una lettura di gruppo
              </h2>
              <p className="text-center text-muted mb-5">
                Compila il modulo per riservare il tuo posto nel circolo.
              </p>

              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  fetch(link, {
                    method: "POST",
                    body: JSON.stringify(this.state.prenotazioni),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  })
                    .then((res) => {
                      if (res.ok) {
                        alert("Prenotazione salvata con successo!");
                        this.setState({
                          prenotazioni: {
                            name: "",
                            phone: "",
                            numberOfPeople: "",
                            smoking: false,
                            dateTime: "",
                            specialRequests: "",
                          },
                        });
                      } else {
                        throw new Error(res.status);
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-bold text-secondary">
                        NOME
                      </Form.Label>
                      <Form.Control
                        id="name"
                        type="text"
                        placeholder="Il tuo nome"
                        className="bg-light border-0 py-2"
                        required
                        value={this.state.prenotazioni.name}
                        onChange={(event) => {
                          this.setState({
                            prenotazioni: {
                              ...this.state.prenotazioni,
                              name: event.target.value,
                            },
                          });
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-bold text-secondary">
                        TELEFONO
                      </Form.Label>
                      <Form.Control
                        id="phone"
                        type="tel"
                        placeholder="333 0000000"
                        className="bg-light border-0 py-2"
                        required
                        value={this.state.prenotazioni.phone}
                        onChange={(event) => {
                          this.setState({
                            prenotazioni: {
                              ...this.state.prenotazioni,
                              phone: event.target.value,
                            },
                          });
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-bold text-secondary">
                        PARTECIPANTI
                      </Form.Label>
                      <Form.Control
                        id="numberOfPeople"
                        type="number"
                        min="1"
                        max="10"
                        className="bg-light border-0 py-2"
                        required
                        value={this.state.prenotazioni.numberOfPeople}
                        onChange={(event) => {
                          this.setState({
                            prenotazioni: {
                              ...this.state.prenotazioni,
                              numberOfPeople: event.target.value,
                            },
                          });
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-bold text-secondary">
                        DATA E ORA
                      </Form.Label>
                      <Form.Control
                        id="dateTime"
                        type="datetime-local"
                        className="bg-light border-0 py-2"
                        required
                        value={this.state.prenotazioni.dateTime}
                        onChange={(event) => {
                          this.setState({
                            prenotazioni: {
                              ...this.state.prenotazioni,
                              dateTime: event.target.value,
                            },
                          });
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label className="small fw-bold text-secondary">
                    RICHIESTE SPECIALI
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    id="specialRequests"
                    rows={3}
                    placeholder="Eventuali preferenze o allergie..."
                    className="bg-light border-0"
                    value={this.state.prenotazioni.specialRequests}
                    onChange={(event) => {
                      this.setState({
                        prenotazioni: {
                          ...this.state.prenotazioni,
                          specialRequests: event.target.value,
                        },
                      });
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Tavolo fumatori"
                    className="text-muted"
                    checked={this.state.prenotazioni.smoking}
                    onChange={(event) => {
                      this.setState({
                        prenotazioni: {
                          ...this.state.prenotazioni,
                          smoking: event.target.checked,
                        },
                      });
                    }}
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button
                    variant="primary"
                    type="submit"
                    className="py-3 fw-bold shadow-sm rounded-pill transition-all"
                    style={{ letterSpacing: "1px" }}
                  >
                    INVIA RICHIESTA
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Bookatable;
