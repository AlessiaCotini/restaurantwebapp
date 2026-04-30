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
      <Container>
        <Row>
          <Col>
            <h3 className="text-center">Prenota una lettura di gruppo!</h3>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                //infiliamoci i dati
                fetch(link, {
                  method: "POST",
                  body: JSON.stringify(this.state.prenotazioni),
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                  .then((res) => {
                    if (res.ok) {
                      alert("prenotazione salvata");
                      this.setState({
                        prenotazioni: {
                          name: "",
                          phone: "",
                          numberOfPeople: "",
                          smoking: false,
                          dateTime: "",
                          specialRequests: "",
                          //riporto il form allo stato iniziale dopo averlo inviato
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
              <Form.Group className="mb-3">
                <Form.Label htmlFor="name">Inserisci il tuo nome</Form.Label>
                <Form.Control
                  id="name"
                  type="text"
                  placeholder="Nome"
                  required
                  value={this.state.prenotazioni.name}
                  onChange={(event) => {
                    //funzione chiamata ad ognicarattere inserito all'interno dell'input
                    //event.target è ciò che inseriamo nell'input
                    this.setState({
                      prenotazioni: {
                        ...this.state.prenotazioni,
                        name: event.target.value,
                      },
                    });
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="phone">Inserisci il tuo numero</Form.Label>
                <Form.Control
                  id="phone"
                  type="text"
                  placeholder="Telefono"
                  required
                  value={this.state.prenotazioni.phone}
                  onChange={(event) => {
                    //funzione chiamata ad ognicarattere inserito all'interno dell'input
                    //event.target è ciò che inseriamo nell'input
                    this.setState({
                      prenotazioni: {
                        ...this.state.prenotazioni,
                        phone: event.target.value,
                        //i puntini sono lo spread operator per il quale non ci cancella le cose he già ci sono o abbiamo inserito
                      },
                    });
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="numberOfPeople">
                  Inserisci il numero di persone
                </Form.Label>
                <Form.Control
                  id="numberOfPeople"
                  type="number"
                  placeholder="Quanti siete?"
                  min="1"
                  max="10"
                  required
                  value={this.state.prenotazioni.numberOfPeople}
                  onChange={(event) => {
                    //funzione chiamata ad ognicarattere inserito all'interno dell'input
                    //event.target è ciò che inseriamo nell'input
                    this.setState({
                      prenotazioni: {
                        ...this.state.prenotazioni,
                        numberOfPeople: event.target.value,
                      },
                    });
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Tavolo fumatori?"
                  checked={this.state.prenotazioni.smoking}
                  onChange={(event) => {
                    //funzione chiamata ad ognicarattere inserito all'interno dell'input
                    //event.target è ciò che inseriamo nell'input
                    this.setState({
                      prenotazioni: {
                        ...this.state.prenotazioni,
                        smoking: event.target.checked,
                        //ritorna un booleano true o false
                      },
                    });
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="dateTime">
                  Inserisci l'dateTime che preferiresti
                </Form.Label>
                <Form.Control
                  id="dateTime"
                  type="datetime-local"
                  placeholder="A che ora vorreste venire"
                  required
                  value={this.state.prenotazioni.dateTime}
                  onChange={(event) => {
                    //funzione chiamata ad ognicarattere inserito all'interno dell'input
                    //event.target è ciò che inseriamo nell'input
                    this.setState({
                      prenotazioni: {
                        ...this.state.prenotazioni,
                        dateTime: event.target.value,
                      },
                    });
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="specialRequests">
                  Inserisci specialRequests particolari
                </Form.Label>
                <Form.Control
                  id="specialRequests"
                  type="textarea"
                  rows="5"
                  placeholder="specialRequests"
                  value={this.state.prenotazioni.specialRequests}
                  onChange={(event) => {
                    //funzione chiamata ad ognicarattere inserito all'interno dell'input
                    //event.target è ciò che inseriamo nell'input
                    this.setState({
                      prenotazioni: {
                        ...this.state.prenotazioni,
                        specialRequests: event.target.value,
                      },
                    });
                  }}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Invia richiesta
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Bookatable;
