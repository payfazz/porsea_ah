// Porsea Framework
// Created by Cashfazz Team
// To contribute visit: https://github.com/payfazz/porsea
/* global document */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import generateRoute from "../utils/routing";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>{generateRoute()}</Switch>
      </HashRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
