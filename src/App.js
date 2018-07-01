import React, { Component } from "react";

import CommentsList from "./Components/CommentsList";
import Monitor from "./Components/DisplayMatchInfo";
import CtrlPanel from "./Components/CtrlPanel";

import { colors, metrics } from "./themes";
import styled, { injectGlobal } from "styled-components";

injectGlobal`
`;

const Test = styled.div``;

const data = require("./mock.json");

class App extends Component {
  state = {
    comments: data.comments,
    commentsCopy: data.comments
  };

  handleClickEvnt = id => {
    let updatelist = this.state.commentsCopy.map(comment => {
      comment.select = false;
      if (comment.id === id) {
        comment.select = true;
      }
      return comment;
    });

    this.setState({
      comments: updatelist
    });
  };

  render() {
    return (
      <Test>
        <div className="container">
          <Monitor
            gameType="Champions League"
            home="AC Milan"
            scoreHome={1}
            scoreAway={1}
            away="Manchester United"
          />
          <div className="row">
            <CommentsList comments={this.state.comments} />
            <CtrlPanel
              keyEvents={this.state.comments}
              click={id => this.handleClickEvnt(id)}
            />
          </div>
        </div>
      </Test>
    );
  }
}

export default App;
