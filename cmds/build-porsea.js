// Porsea Framework
// Created by Cashfazz Team
// To contribute visit: https://github.com/payfazz/porsea

const webpack = require("webpack");
const config = require("../config/webpack/prod.webpack.config");
const applyPorseaConfig = require("../utils/porsea-config");

const build = _ => {
  const newConfig = applyPorseaConfig(config);
  webpack(newConfig, (err, stats) => {
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
