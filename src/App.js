import React, { Component } from "react";

import CommentsList from "./Components/CommentsList";
import Monitor from "./Components/DisplayMatchInfo";
import PanelCtrl from "./Components/PanelCtrl";

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
