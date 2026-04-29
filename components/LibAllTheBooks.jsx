// import { Col } from "react-bootstrap";
// import SingleBook from "./SingleBook";
// import Books from "../src/assets/romance.json";
// import Form from "react-bootstrap/Form";
// import { Component } from "react";
// // import BooksFantasy from '../src/assets/fantasy.json'
// // import BooksHorror from '../src/assets/horror.json'
// // import BooksHistory from '../src/assets/history.json'
// // import BooksScifi from '../src/assets/scifi.json'
// // import SearchBook from './SearchBook';

// class SearchBook extends Component {
//   state = {
//     ricerca: {
//       input: "",
//     },
//   };
//   render() {
//     return (
//       <div>
//         <Form.Group className="mb-3">
//           <Form.Label htmlFor="input">Inserisci un libro da cercare</Form.Label>
//           <Form.Control
//             id="input"
//             type="text"
//             placeholder=""
//             required
//             value={this.state.ricerca.input}
//             onChange={(event) => {
//               this.setState({
//                 ricerca: {
//                   ...this.state.ricerca,
//                   input: event.target.value,
//                 },
//               });
//             }}
//           />
//         </Form.Group>
//         {Books.filter(this.state.ricerca.input.value).map((aBook) => {
//           return (
//             <Col xs={12} md={4} lg={3} key={aBook.asin}>
//               <SingleBook book={aBook} />
//             </Col>
//           );
//         })}
//       </div>
//     );
//   }
// }
// export default SearchBook;
