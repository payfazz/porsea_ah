const webpack = require("webpack");
const config = require("../config/webpack/default.webpack.config");

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
