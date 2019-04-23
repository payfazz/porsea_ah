// Porsea Framework
// Created by Cashfazz Team
// To contribute visit: https://github.com/payfazz/porsea
/* global document */

import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import generateRoute from "../utils/routing";
import Container from "../../../src/app";

class App extends PureComponent {
  get renderBody() {
    return (
      <BrowserRouter>
        <Switch>{generateRoute()}</Switch>
      </BrowserRouter>
    );
  }

  render() {
    return <Container>{this.renderBody}</Container>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
