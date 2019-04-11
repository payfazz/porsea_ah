import React from "react";
import { Route, Link } from "react-router-dom";
import compose from "./helper";

const filterIndexJSIsExist = pages =>
  pages.filter(({ isIndexJSExists }) => isIndexJSExists);

const mapObjectToRoute = pages =>
  pages.map(({ folderName }) => {
    const Page = require("../../src/pages/" + folderName).default;
    if (Page.navigationOptions) {
      return (
        <Route
          key={Page.navigationOptions().path}
          component={Page}
          {...Page.navigationOptions()}
        />
      );
    } else {
      return (
        <Route key={folderName} component={Page} path={"/" + folderName} />
      );
    }
  });

const generateRoute = () =>
  compose(
    mapObjectToRoute,
    filterIndexJSIsExist
  )(process.env.PAGES);

console.log(process.env.PAGES);

export default generateRoute;
