import React from "react";
import { Route, Link } from "react-router-dom";

const generateRoute = () =>
  process.env.PAGES.map(folderName => {
    const TargetComponent = require("../../src/pages/" + folderName).default;
    return (
      <Route
        key={TargetComponent.navigationOptions().path}
        component={TargetComponent}
        {...TargetComponent.navigationOptions()}
      />
    );
  });

export default generateRoute;
