//importo dalle dipendenze
import 'bootstrap/dist/css/bootstrap.min.css'
//questa riga ha importato il foglio css di bootstrap in TUTTO IL PROGETTO
import { Container, Row, Col  } from 'react-bootstrap'
//graffe FONDAMENTALI perchè NON SONO DI DEFAULT
//i componenti che dichiariamo noi saranno UNO per file quindi li si possono esportare come default quindi importre senza graffe
function App() {

  return (
    <>
    <Container className=''>
      <Row className=''>
        <Col className=''>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
