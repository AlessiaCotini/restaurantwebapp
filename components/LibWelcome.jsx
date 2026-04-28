import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';



function LibWelcome(){
    const [show, setShow] = useState(true);
return (
    <>
    <Alert show={show} variant="success" className='text-center'>
        <Alert.Heading>Lettura della settimana</Alert.Heading>
        <p>
          Estratto da "Le città invisibili" di Italo Calvino:
          "D’una città non godi le sette o le settantasette meraviglie, ma la risposta che dà a una tua domanda."
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Chiudi
          </Button>
        </div>
      </Alert>
      <div className='text-center'>
      {!show && <Button className='text-dark bg-body border-success text-center m-3' onClick={() => setShow(true)}>Consigliato da noi per la settimana</Button>}
      </div>
    </>
)
}
export default LibWelcome