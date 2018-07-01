import React from "react";
import Comment from "./Comment";

import styled from "styled-components";

const CommentListWrapper = styled.div``;

const CommentsList = props => {
  const comment = props.comments.map(c => {
    return (
      <Comment
        key={c.id}
        time={c.time}
        eventType={c.eventType}
        comment={c.comment}
        select={c.select}
        id={c.id}
      />
    );
  });

  return (
    <CommentListWrapper className="col-9 col-md-8 pt-3 pb-3">
      {comment}
    </CommentListWrapper>
  );
};

export default CommentsList;
