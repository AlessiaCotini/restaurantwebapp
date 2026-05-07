import { ListGroup } from "react-bootstrap";

const SingleComment = function ({ comment }) {
  return (
    <ListGroup className="w-100">
      <ListGroup.Item key={comment._id} data-testid="comment">
        <strong>{comment.author}</strong> - {comment.comment}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default SingleComment;
