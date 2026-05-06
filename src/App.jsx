//importo dalle dipendenze
import "bootstrap/dist/css/bootstrap.min.css";
//questa riga ha importato il foglio css di bootstrap in TUTTO IL PROGETTO
//graffe FONDAMENTALI perchè NON SONO DI DEFAULT
//i componenti che dichiariamo noi saranno UNO per file quindi li si possono esportare come default quindi importre senza graffe
import LibFooter from "../components/LibFooter";
import LibWelcome from "../components/LibWelcome";
import LibNavbar from "../components/LibNavbar";
import { Container, Row } from "react-bootstrap";
import SearchBook from "../components/SearchBook";
import CommentArea from "../components/CommentArea";
import { Component } from "react";
// import Bookatable from "../components/Bookatable";
import Backoffice from "../components/Backoffice";

// import LibAllTheBooks from '../components/LibAllTheBooks'
// import LibFantasy from "../components/LibFantasy";
// import LibScify from '../components/LibScify'
// import LibHistory from '../components/LibHistory'
// import LibHorror from '../components/LibHorror'
import Bookatable from "../components/Bookatable";
import Menu from "../components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//vanno importati in app solitamente si utilizzano qui, sono componenti react
//BrowserRouter è inteso come 'wrapper', serve per RACCHIUDERE TUTTI GLI ELEMANTI
//A CUI SI VUOLE FORNIRE FUNZIONALITA' DI ROUTER lo metto agli apici di APP
//Routes esiste solo all'interno di BrowserRouter -> SCOPO = permette la creazione di singole Route
//al suo interno può contenere solo singole Route, si utilizza quindi per
//delimitare le porzioni di interfaccia che si vuole modificare durante il percorso
//l'unico contenuto possibile quindi sono singole ROUTE
class App extends Component {
  state = {
    selected: null,
  };
  getCommentArea = (newBook) => {
    this.setState({
      selected: newBook,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <header>
            <LibNavbar />
          </header>
          <main className="flex-grow-1 m-2">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Menu />
                    <LibWelcome />
                  </>
                }
              ></Route>
              <Route
                path="/menu"
                element={
                  <>
                    <Container fluid>
                      <Row>
                        <SearchBook changeAsin={this.getCommentArea} />
                        <CommentArea asin={this.state.selected} />
                      </Row>
                    </Container>
                  </>
                }
              />
              <Route path="/prenota" element={<Bookatable />} />
              <Route path="/admin" element={<Backoffice />} />
            </Routes>
          </main>
          <footer>
            <LibFooter />
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
