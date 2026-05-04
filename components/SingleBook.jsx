import { Component } from "react";
import { Card, ListGroup, Col } from "react-bootstrap";
// import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col xs={4} md={3}>
        <Card
          className=" fs-5 text-capitalize text-center text-primary d-inline justify-content-around"
          onClick={() => {
            this.setState({
              selected: !this.state.selected,
            });
            this.props.changeAsin(this.props.book.asin);
          }}
          style={{
            border:
              this.props.selectedAsin === this.props.book.asin
                ? "3px solid red"
                : "1px solid #ddd",
          }}
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
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
