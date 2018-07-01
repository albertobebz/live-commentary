import React, { Component } from "react";

import CommentsList from "./Components/CommentsList";
import Monitor from "./Components/DisplayMatchInfo";
import CtrlPanel from "./Components/CtrlPanel";

import { colors, metrics } from "./themes";
import styled, { injectGlobal } from "styled-components";

injectGlobal`

  body{
    color: ${colors.grey}
    font-family: 'Encode Sans Condensed', sans-serif;
    background: linear-gradient(to bottom, #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b4ddb4', endColorstr='#002400',GradientType=0 ); /* IE6-9 */
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

const Test = styled.div`
  background: linear-gradient(
    to bottom,
    #88bfe8 0%,
    #1a8edb 41%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
`;

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
    const date = new Date();
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    const displayDate = `${day}/${month}/${year}`;

    return (
      <Test>
        <div className="container">
          <Monitor
            gameType="Champions League"
            date={displayDate}
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
