// Porsea Framework
// Created by Cashfazz Team
// To contribute visit: https://github.com/payfazz/porsea

const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const path = require("path");
const LOCATION = require("../location");
const checkWebpack = require("../checkPorseaConfig");

const start = argv => {
  const config = require("../config/webpack/dev.webpack.config.js");
  const newConfig = checkWebpack(config);

  const options = {
    hot: true,
    host: "localhost",
    historyApiFallback: true
  };

  WebpackDevServer.addDevServerEntrypoints(newConfig, options);
  const compiler = webpack(newConfig);
  const server = new WebpackDevServer(compiler, options);
  server.listen(argv.port);

  console.log("Project is running at http://localhost:" + argv.port);
};

module.exports = start;
