import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "../../../src/pages/not-found";
import compose from "./helper";

const filterIndexJSIsExist = pages =>
  pages.filter(({ isIndexJSExists }) => isIndexJSExists);

const mapObjectToRoute = pages => {
  return (
    <Switch>
      {pages.map(({ folderName }) => {
        const Page = require("../../../src/pages/" + folderName).default;
        if (Page.navigationOptions) {
          return (
            <Route
              key={Page.navigationOptions().path}
              component={Page}
              {...Page.navigationOptions()}
            />
          );
        }

        return (
          <Route key={folderName} component={Page} path={"/" + folderName} />
        );
      })}
      <Route path={"*"} component={NotFoundPage} />
    </Switch>
  );
};
const folderInPages = JSON.parse(process.env.FOLDER_IN_PAGES);
const generateRoute = () =>
  compose(
    mapObjectToRoute,
    filterIndexJSIsExist
  )(folderInPages);

export default generateRoute;
