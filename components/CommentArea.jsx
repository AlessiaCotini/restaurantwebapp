import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { useState } from "react";
import { useEffect } from "react";
const link = "https://striveschool-api.herokuapp.com/api/comments/";
const CommentArea = function (props) {
  // state = {
  //   comment: [],
  // };
  const [comment, setComment] = useState([]);
  const getComment = () => {
    if (!props.asin) return;
    fetch(link + props.asin, {
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
        setComment(arrayCommenti);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (props.asin) {
      getComment();
    }
    //stefanino's help needed
    // } else {
    //   return (
    //     <Col xs={6}>
    //       <div className="alert alert-info">
    //         Seleziona un libro per visualizzare i commenti
    //       </div>
    //     </Col>
    //   );
    // }
  }, [props.asin]);
  return (
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
              <CommentList arrayCommenti={comment} />
            </div>
            <hr className="my-4 opacity-25" />
            <div className="bg-light p-3 rounded-3">
              <AddComment asin={props.asin} />
            </div>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};
export default CommentArea;
