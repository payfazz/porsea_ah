// Porsea Framework
// Created by Cashfazz Team
// To contribute visit: https://github.com/payfazz/porsea

const webpack = require("webpack");
const config = require("../config/webpack/dev.webpack.config");

const build = _ => {
  webpack(config, (err, stats) => {
    if (err) {
      console.log(err);
    }
    console.log(
      stats.toString({
        modules: false,
        colors: true
      })
    );
  });
};

module.exports = build;
