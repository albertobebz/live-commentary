import React, { Component } from "react";

import CommentsList from "./Components/CommentsList";
import Monitor from "./Components/DisplayMatchInfo";
import PanelCtrl from "./Components/PanelCtrl";

import { colors } from "./themes";
import styled, { injectGlobal } from "styled-components";

injectGlobal`

  body{
    color: ${colors.white}
  }
`;
class App extends Component {
  render() {
    return (
      <div className="App">
        <Monitor />
        <CommentsList />
        <PanelCtrl />
      </div>
    );
  }
}

export default App;
