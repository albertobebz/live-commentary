import React from "react";

import iconsGenerator from "../utils/iconsGenerator";

import { colors, metrics } from "../themes";
import styled from "styled-components";

const PanelCtrlWrapper = styled.div`
  h4 {
    color: ${colors.darkYellow};
  }

  ul {
    @media (min-width: ${metrics.breakpoints.minMedium}px) {
      border-top: 1px solid ${colors.borders};
    }

    li:not(:last-of-type) {
      margin-bottom: 10px;
    }
  }
`;

const CtrlPanel = props => {
  const keyEvent = props.keyEvents
    .filter(k => k.eventType !== "comment")
    .map(k => {
      let icon = iconsGenerator(k.eventType);
      return (
        <li key={k.id} onClick={() => props.click(k.id)}>
          <a href={`#${k.id}`}>
            <span className="mr-2">{k.time}' </span>
            <span>{icon}</span>
            <p className="ml-3 mb-0 d-none d-md-inline-block">
              {k.comment.slice(0, 10)}...
            </p>
          </a>
        </li>
      );
    });

  return (
    <PanelCtrlWrapper className="col-3 col-md-4 pt-3 pt-md-0 sticky-top h-100">
      <h4 className="d-none d-md-block pt-3 pb-3 m-0">Keys event</h4>
      <ul className="d-inline-flex flex-column align-items-md-start pt-md-3 pr-md-3">
        {keyEvent}
      </ul>
    </PanelCtrlWrapper>
  );
};

export default CtrlPanel;
