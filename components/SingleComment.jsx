import { ListGroup } from "react-bootstrap";

const SingleComment = function ({ comment }) {
  return (
    <ListGroup>
      <ListGroup.Item key={comment._id}>
        <strong>{comment.author}</strong> - {comment.comment}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default SingleComment;
