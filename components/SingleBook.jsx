import { Card, Col } from "react-bootstrap";

import { useState } from "react";

const SingleBook = ({ book, changeAsin }) => {
  const [selected, setSelected] = useState(false);

  return (
    <Col xs={4} md={3} className="mb-4">
      <Card
        className={`h-100 shadow-sm border-0 transition-all ${
          selected ? "shadow-lg scale-up" : ""
        }`}
        onClick={() => {
          setSelected(!selected);
          if (changeAsin) {
            changeAsin(book.asin);
          }
        }}
        style={{
          cursor: "pointer",
          transition: "all 0.3s ease",
          outline: selected ? "3px solid #0d6efd" : "none",
          transform: selected ? "translateY(-5px)" : "none",
        }}
      >
        <div
          style={{
            overflow: "hidden",
            borderTopLeftRadius: "calc(0.375rem - 1px)",
            borderTopRightRadius: "calc(0.375rem - 1px)",
          }}
        >
          <Card.Img
            variant="top"
            src={book.img}
            style={{
              height: "300px",
              objectFit: "cover",
              transition: "transform 0.5s ease",
            }}
            className="card-img-hover"
          />
        </div>

        <Card.Body className="d-flex flex-column justify-content-between p-3">
          <Card.Title
            className="text-dark fw-bold mb-2 text-truncate-2"
            style={{ fontSize: "1.1rem", minHeight: "3rem" }}
          >
            {book.title}
          </Card.Title>

          <div className="d-flex justify-content-between align-items-center mt-auto">
            <span className="badge bg-light text-muted text-uppercase fw-normal">
              {book.category}
            </span>
            <span className="fw-bold text-success fs-5">{book.price}€</span>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
