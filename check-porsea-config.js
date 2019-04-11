const fs = require("fs");
const path = require("path");
const LOCATION = require("./utils/location");

const checkWebpack = defaultWebpackConfig => {
  if (
    fs.existsSync(
      path.resolve(LOCATION.CURRENT_TERMINAL_PATH + "porsea.config.js")
    )
  ) {
    const overrideWebpackConfig = require(process.cwd() + "/porsea.config.js");
    const webpackConfig = overrideWebpackConfig(defaultWebpackConfig);

    return webpackConfig.customWebpack;
  } else {
    return defaultWebpackConfig;
  }
};

module.exports = checkWebpack;
