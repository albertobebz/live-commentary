import React from "react";
import styled from "styled-components";

import { colors } from "../themes";

const CommentWrapper = styled.div`
  .minute {
    width: 50px;
    height: 50px;
    min-width: 50px;
    border-radius: 50%;
    border: 2px solid ${colors.borderBlue};
    background-color: transparent;
  }

  &.selected {
    .minute {
      border: 4px solid ${colors.darkYellow};
    }
  }
`;

const Comment = ({ select, id, time, eventType, comment }) => {
  let eventTypeIcon;

  switch (eventType) {
    case "red":
      eventTypeIcon = <i className="far fa-bookmark fa-bookmark-red" />;
      break;
    case "yellow":
      eventTypeIcon = <i className="far fa-bookmark fa-bookmark-yellow" />;
      break;
    case "comment":
      eventTypeIcon = <i className="fas fa-align-left" />;
      break;
    case "injury":
      eventTypeIcon = <i className="fas fa-ambulance" />;
      break;
    case "goal":
      eventTypeIcon = <i className="fas fa-basketball-ball" />;
      break;
    case "substitution":
      eventTypeIcon = <i className="fas fa-arrows-alt-v" />;
      break;
    default:
      eventTypeIcon = "";
  }

  return (
    <CommentWrapper
      id={select ? id : ""}
      className={`${
        select ? "selected" : ""
      } d-flex align-items-center align-items-sm-start pt-3 pb-3 flex-column flex-sm-row`}
    >
      <span className="minute d-flex justify-content-center align-items-center">
        {`${time}'`}
      </span>
      <span className="m-2">{eventTypeIcon}</span>
      <p className="text-justify">{comment}</p>
    </CommentWrapper>
  );
};

export default Comment;
