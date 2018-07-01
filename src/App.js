import React, { Component } from "react";

import CommentsList from "./Components/CommentsList";
import Monitor from "./Components/DisplayMatchInfo";
import CtrlPanel from "./Components/CtrlPanel";

import todayDate from "./utils/todayDate";

import { colors, metrics } from "./themes";
import styled, { injectGlobal } from "styled-components";

injectGlobal`

  body{
    color: ${colors.white};
    background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  }

	ul {
		padding: 0;
		margin: 0;
	}

	li {
		list-style-type: none;
  }

  a:hover {
    text-decoration: none;
  }
  
  i {
    font-size: 20px;

    @media (min-width: ${metrics.breakpoints.minMedium}){
      font-size: 25px;
    }
  }

  .fa-bookmark-red {
    color: ${colors.red};
  }

  .fa-bookmark-yellow {
    color: ${colors.yellow};
  }
`;

const AppWrapper = styled.div``;

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
      <AppWrapper>
        <div>
          <div className="container">
            <Monitor
              gameType="Champions League"
              date={todayDate}
              home="AC Milan"
              away="Manchester United"
              scoreHome={2}
              scoreAway={1}
            />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <CommentsList comments={this.state.comments} />
            <CtrlPanel
              keyEvents={this.state.comments}
              click={id => this.handleClickEvnt(id)}
            />
          </div>
        </div>
      </AppWrapper>
    );
  }
}

export default App;
