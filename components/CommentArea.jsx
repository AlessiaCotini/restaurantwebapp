import { Component } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const link = "https://striveschool-api.herokuapp.com/api/comments/";
class CommentArea extends Component {
  state = {
    comment: [],
  };
  getComment = () => {
    fetch(link + this.props.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzM2UzYWYwNDIwZDAwMTUxNTVhNjciLCJpYXQiOjE3Nzc1NDg4NTgsImV4cCI6MTc3ODc1ODQ1OH0.62LnJWSbfVbpl0zzC3UgMPybFX4Rxqxkv4X8DdQI9II",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((arrayCommenti) => {
        console.log("Commenti ricevuti:", arrayCommenti);
        this.setState({
          comment: arrayCommenti,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getComment();
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h3>Commenti degli utenti</h3>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} lg={6}>
            <ListGroup>
              {this.state.comment.slice(0, 3).map((comment) => {
                return (
                  <ListGroup.Item key={comment._id}>
                    <strong>{comment.author}</strong> - {comment.comment}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default CommentArea;
