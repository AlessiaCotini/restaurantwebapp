import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = function ({ arrayCommenti }) {
  return (
    <ListGroup>
      {arrayCommenti.map((c) => {
        return <SingleComment key={c._id} comment={c} />;
      })}
    </ListGroup>
  );
};

export default CommentList;
