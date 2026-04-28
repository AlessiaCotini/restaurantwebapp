import Card from 'react-bootstrap/Card';
// import Books from '../src/assets/romance.json'
// import BooksFantasy from '../src/assets/fantasy.json'
// import BooksHorror from '../src/assets/horror.json'
// import BooksHistory from '../src/assets/history.json'
import BooksScifi from '../src/assets/scifi.json'
import { Col } from 'react-bootstrap';
function LibScify(){
return (
BooksScifi.slice(0,5).map((book)=>{
    return(
    <>
     <Col className='col-2'>
      <Card className="bg-dark text-white h-100 text-center d-flex justify-content-center">
      <Card.Img src={book.img} alt="Card image" className='opacity-50' />
      <Card.ImgOverlay className='m-3'>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          {book.category}
        </Card.Text>
        <Card.Text>{book.price}$</Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Col>
    </> 
    )
 })
)
}
export default LibScify