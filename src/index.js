// Porsea Framework
// Created by Cashfazz Team
// To contribute visit: https://github.com/payfazz/porsea
/* global document */

import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import generateRoute from "../utils/routing";

class App extends PureComponent {
  get renderBody() {
    return (
      <BrowserRouter>
        <Switch>{generateRoute()}</Switch>
      </BrowserRouter>
    );
  }

  render() {
    if (process.env.IS_APP_EXISTS) {
      const Container = require("../../../src/app").default;
      return <Container>{this.renderBody}</Container>;
    }

    return this.renderBody;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
