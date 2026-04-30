import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommentList from "./CommentList";

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
          <Col className="text-center">
            <h4 className="text-warning">Commenti degli utenti</h4>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} lg={6}>
            <CommentList arrayCommenti={this.state.comment} />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default CommentArea;
