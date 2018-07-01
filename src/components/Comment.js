import React from "react";
import styled from "styled-components";

import iconsGenerator from "../utils/iconsGenerator";

import { colors, metrics } from "../themes";

const CommentWrapper = styled.div`
  .minute {
    width: 50px;
    height: 50px;
    min-width: 50px;
    border-radius: ${metrics.borders.borderRadiusRound}%;
    border: ${metrics.borders.borderDefault}px solid ${colors.borderBlue};
    background-color: transparent;
  }

  &.selected {
    .minute {
      border: ${metrics.borders.borderThick}px solid ${colors.darkYellow};
    }
  }
`;

const Comment = ({ select, id, time, eventType, comment }) => {
  let icon = iconsGenerator(eventType);

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
      <span className="m-2">{icon}</span>
      <p className="text-justify">{comment}</p>
    </CommentWrapper>
  );
};

export default Comment;
