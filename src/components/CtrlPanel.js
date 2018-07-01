import React from "react";
import styled from "styled-components";

const PanelCtrlWrapper = styled.div``;

const CtrlPanel = props => {
  const keyEvent = props.keyEvents
    .filter(k => k.eventType != "comment")
    .map(k => {
      let eventTypeIcon;

      switch (k.eventType) {
        case "red":
          eventTypeIcon = <i className="far fa-bookmark" />;
          break;
        case "yellow":
          eventTypeIcon = <i className="far fa-bookmark" />;
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
        <li key={k.id} onClick={() => props.click(k.id)}>
          <a href={`#${k.id}`}>
            <span>{k.time}' - </span>
            <span>{eventTypeIcon}</span>
            <p className="ml-3 d-none d-md-inline-block">
              {k.comment.slice(0, 10)}...
            </p>
          </a>
        </li>
      );
    });

  return (
    <PanelCtrlWrapper className="col-3 col-md-4 pt-3 pt-md-0 sticky-top h-100">
      <h3 className="d-none d-md-block">Select a key event</h3>
      <ul className="d-flex flex-column align-items-md-start">{keyEvent}</ul>
    </PanelCtrlWrapper>
  );
};

export default CtrlPanel;
