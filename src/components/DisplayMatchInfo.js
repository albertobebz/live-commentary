import React from "react";

import { colors } from "../themes";
import styled from "styled-components";

const MonitorWrapper = styled.div``;

const DisplayMatchInfo = props => {
  return (
    <MonitorWrapper className="pb-3">
      <div className="text-center">
        <h1>{props.gameType}</h1>
        <h3>{props.date}</h3>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center">
          <div className="d-flex flex-column align-items-center">
            <img
              src={require("../assets/images/acmilan.png")}
              className="milan-img"
            />
            <span>{props.home}</span>
          </div>
          <span className="m-3 score d-flex justify-content-center align-items-center">
            {props.scoreHome}
          </span>
        </div>
        <span>:</span>
        <div className="d-flex align-items-center flex-row-reverse">
          <div className="d-flex flex-column align-items-center">
            <img
              src={require("../assets/images/manu.png")}
              className="manu-img"
            />
            <span>{props.away}</span>
          </div>
          <span className="m-3 score d-flex justify-content-center align-items-center">
            {props.scoreAway}
          </span>
        </div>
      </div>
    </MonitorWrapper>
  );
};

export default DisplayMatchInfo;
