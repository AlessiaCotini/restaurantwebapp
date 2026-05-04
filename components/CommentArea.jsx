import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const link = "https://striveschool-api.herokuapp.com/api/comments/";
class CommentArea extends Component {
  state = {
    comment: [],
  };
  getComment = () => {
    if (!this.props.asin) return;
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

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.getComment();
    }
  }
  render() {
    if (!this.props.asin) {
      return (
        <Col xs={6}>
          <div className="alert alert-info">
            Seleziona un libro per visualizzare i commenti
          </div>
        </Col>
      );
    }
    return (
      // <Col
      //   xs={6}
      //   className="sticky-top align-self-start"
      //   style={{ top: "20px", height: "fit-content" }}
      // >
      //   <Container
      //     fluid
      //     className=" mt-1 border border-1 border-dark rounded-2"
      //   >
      //     <Row>
      //       <Col className="text-center">
      //         <h4 className="text-warning">Commenti degli utenti</h4>
      //       </Col>
      //     </Row>
      //     <Row>
      //       <Col className="col-12">
      //         <CommentList arrayCommenti={this.state.comment} />
      //         <AddComment asin={this.props.asin} />
      //       </Col>
      //     </Row>
      //   </Container>
      // </Col>
      <Col
        xs={6}
        className="sticky-top align-self-start py-2"
        style={{ top: "20px", height: "fit-content" }}
      >
        <Container
          fluid
          className="p-4 bg-white shadow-sm border border-light-subtle rounded-3"
          style={{ minHeight: "200px" }}
        >
          <Row className="mb-4">
            <Col className="text-center border-bottom pb-2">
              <h5
                className="text-primary fw-bold text-uppercase mb-0"
                style={{ letterSpacing: "1px" }}
              >
                Commenti degli utenti
              </h5>
            </Col>
          </Row>

          <Row>
            <Col className="col-12 px-0">
              <div
                style={{
                  maxHeight: "60vh",
                  overflowY: "auto",
                  overflowX: "hidden",
                }}
                className="mb-3"
              >
                <CommentList arrayCommenti={this.state.comment} />
              </div>
              <hr className="my-4 opacity-25" />
              <div className="bg-light p-3 rounded-3">
                <AddComment asin={this.props.asin} />
              </div>
            </Col>
          </Row>
        </Container>
      </Col>
    );
  }
}
export default CommentArea;
