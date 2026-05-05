import SingleBook from "./SingleBook";
// import Books from "../src/assets/romance.json";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import BooksFantasy from '../src/assets/fantasy.json'
// import BooksHorror from '../src/assets/horror.json'
// import BooksHistory from '../src/assets/history.json'
import BooksScifi from "../src/assets/scifi.json";
// import SearchBook from './SearchBook';

const SearchBook = (props) => {
  const [ricerca, setRicerca] = useState("");
  return (
    <Col xs={6}>
      <div>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="input">Inserisci un libro da cercare</Form.Label>
          <Form.Control
            id="input"
            type="text"
            placeholder=""
            required
            value={ricerca}
            onChange={(event) => {
              setRicerca(event.target.value);
            }}
          />
        </Form.Group>
      </div>
      <Container fluid>
        <Row>
          {BooksScifi.filter((book) =>
            book.title.toLowerCase().includes(ricerca.toLowerCase()),
          )
            .slice(0, 15)
            .map((aBook) => (
              <SingleBook
                key={aBook.asin}
                book={aBook}
                changeAsin={props.changeAsin}
                selectedAsin={props.selectedAsin}
              />
            ))}
        </Row>
      </Container>
    </Col>
  );
};
export default SearchBook;
