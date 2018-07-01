import React from "react";

import { colors, fonts, metrics } from "../themes";
import styled from "styled-components";

const MonitorWrapper = styled.div`
  img {
    height: auto;
  }

  .date {
    color: ${colors.mediumGrey};
    letter-spacing: 4px;
    font-family: "Roboto", sans-serif;

    @media (min-width: ${metrics.breakpoints.minMedium}px) {
      font-size: ${fonts.fontSize.xlarge}px;
    }
  }

  .team {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-style: italic;

    @media (min-width: ${metrics.breakpoints.minMedium}px) {
      font-size: ${fonts.fontSize.default}px;
    }
  }

  .madrid {
    width: 90px;

    @media (min-width: ${metrics.breakpoints.minMedium}px) {
      width: 150px;
    }
  }

  .barcelona {
    width: 80px;

    @media (min-width: ${metrics.breakpoints.minMedium}px) {
      width: 140px;
    }
  }

  .score {
    width: 50px;
    height: 50px;
    min-width: 50px;
    border-radius: 50%;
    color: ${colors.white};
    background-color: rgba(26, 28, 30, 0.4);

    @media (min-width: ${metrics.breakpoints.minMedium}px) {
      width: 80px;
      height: 80px;
      min-width: 80px;
    }
  }

  .score,
  .score-divider {
    font-size: ${fonts.fontSize.dafault}px;

    @media (min-width: ${metrics.breakpoints.minMedium}px) {
      font-size: ${fonts.fontSize.xxlarge}px;
    }
  }

  .score-divider {
    color: ${colors.mediumGrey};
  }
`;

const DisplayMatchInfo = props => {
  return (
    <MonitorWrapper className="pb-3">
      <div className="text-center">
        <h1>{props.gameType}</h1>
        <span className="date d-inline-block">
          <u>{props.date}</u>
        </span>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center">
          <div className="d-flex flex-column align-items-center">
            <img
              alt="Madrid"
              className="madrid"
              src={require("../assets/images/madrid.png")}
            />
            <span className="team text-uppercase text-center">
              {props.home}
            </span>
          </div>
          <span className="m-3 score d-flex justify-content-center align-items-center">
            {props.scoreHome}
          </span>
        </div>
        <span className="score-divider">:</span>
        <div className="d-flex align-items-center flex-row-reverse">
          <div className="d-flex flex-column align-items-center">
            <img
              alt="Barcelona"
              className="barcelona"
              src={require("../assets/images/liverpool.png")}
            />
            <span className="team text-uppercase text-center">
              {props.away}
            </span>
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
