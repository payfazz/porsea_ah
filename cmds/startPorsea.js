// Porsea Framework
// Created by Cashfazz Team
// To contribute visit: https://github.com/payfazz/porsea

const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const path = require("path");
const LOCATION = require("../location");

const start = argv => {
  const config = require("../config/webpack/dev.webpack.config.js");
  const options = {
    hot: true,
    host: "localhost"
  };

  WebpackDevServer.addDevServerEntrypoints(config, options);
  const compiler = webpack(config);
  const server = new WebpackDevServer(compiler, options);
  server.listen(argv.port);

  console.log("Project is running at http://localhost:" + argv.port);
};

module.exports = start;
