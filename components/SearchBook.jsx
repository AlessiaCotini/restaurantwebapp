import SingleBook from "./SingleBook";
import Books from "../src/assets/romance.json";
import Form from "react-bootstrap/Form";
import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import BooksFantasy from '../src/assets/fantasy.json'
// import BooksHorror from '../src/assets/horror.json'
// import BooksHistory from '../src/assets/history.json'
// import BooksScifi from '../src/assets/scifi.json'
// import SearchBook from './SearchBook';
console.log(Books);
class SearchBook extends Component {
  state = {
    ricerca: "",
  };
  render() {
    return (
      <Col xs={6}>
        <div>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="input">
              Inserisci un libro da cercare
            </Form.Label>
            <Form.Control
              id="input"
              type="text"
              placeholder=""
              required
              value={this.state.ricerca}
              onChange={(event) => {
                this.setState({
                  ricerca: event.target.value,
                });
              }}
            />
          </Form.Group>
        </div>
        <Container fluid>
          <Row>
            {Books.filter((book) =>
              book.title
                .toLowerCase()
                .includes(this.state.ricerca.toLowerCase()),
            ).map((aBook) => (
              <SingleBook key={aBook.asin} book={aBook} />
            ))}
          </Row>
        </Container>
      </Col>
    );
  }
}
export default SearchBook;
