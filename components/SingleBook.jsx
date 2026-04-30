import { Component } from "react";
import { Card, ListGroup, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col xs={6} md={4} lg={3}>
        <Card
          className=" fs-5 text-capitalize text-center text-primary d-flex justify-content-around"
          onClick={() => {
            this.setState({
              selected: !this.state.selected,
            });
          }}
          style={{ border: this.state.selected ? "1px solid black" : "none" }}
        >
          <Card.Img
            style={{ height: "400px", objectFit: "cover", borderRadius: "1em" }}
            variant="top"
            src={this.props.book.img}
          />
          <Card.Body>
            <Card.Title className="text-dark">
              {this.props.book.title}
            </Card.Title>
            <Card.Text className="text-warning">
              {this.props.book.category}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{this.props.book.price}$</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link className="text-dark">
              Leggi qui i commenti dei lettori
            </Card.Link>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea asin={this.props.book.asin} />}
      </Col>
    );
  }
}
export default SingleBook;
