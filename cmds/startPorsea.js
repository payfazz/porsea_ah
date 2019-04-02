// Porsea Framework
// Created by Cashfazz Team
// To contribute visit: https://github.com/payfazz/porsea

const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const path = require("path");

const start = argv => {
  const config = path.resolve(
    __dirname,
    "../config/webpack/default.webpack.config.js"
  );
  console.log(config);
  const compiler = webpack(require(config));

  server = new WebpackDevServer(compiler);
  server.listen(argv.port);
  console.log("Project is running at http://localhost:" + argv.port);
};

module.exports = start;
