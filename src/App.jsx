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
// import Bookatable from "../components/Bookatable";
// import Backoffice from "../components/Backoffice";

// import LibAllTheBooks from '../components/LibAllTheBooks'
// import LibFantasy from "../components/LibFantasy";
// import LibScify from '../components/LibScify'
// import LibHistory from '../components/LibHistory'
// import LibHorror from '../components/LibHorror'
// import Bookatable from '../components/Bookatable'
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <LibNavbar />
        {/* <Bookatable /> */}
        {/* <Backoffice /> */}
      </header>
      <main className="flex-grow-1 m-2">
        <LibWelcome />
        <Container fluid>
          <Row>
            <SearchBook />
          </Row>
        </Container>
      </main>
      <footer>
        <LibFooter />
      </footer>
    </div>
  );
}

export default App;
