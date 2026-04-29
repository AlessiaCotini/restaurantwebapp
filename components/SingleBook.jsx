import { Component } from "react";
import { Card, ListGroup, Col } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col xs={12} md={6} lg={4}>
        <Card
          onClick={() => {
            this.setState({
              selected: !this.state.selected,
            });
          }}
          style={{ border: this.state.selected ? "3px solid green" : "none" }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>{this.props.book.category}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{this.props.book.price}$</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Leggi qui i commenti dei lettori</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
