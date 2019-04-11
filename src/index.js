// Porsea Framework
// Created by Cashfazz Team
// To contribute visit: https://github.com/payfazz/porsea
/* global document */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import App from "./components/App";
import generateRoute from "../routing";

class App extends React.Component {
  render() {
    return <Router>{generateRoute()}</Router>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
