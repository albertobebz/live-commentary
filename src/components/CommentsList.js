import React from "react";
import comment from "./Comment";

const CommentsList = props => {
  return (
    <div>
      <p>this wrap the list of single comment</p>
      <Comment />
    </div>
  );
};

export default CommentsList;
