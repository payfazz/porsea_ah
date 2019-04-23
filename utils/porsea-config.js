const path = require("path");
const location = require("./location");

const _overrideEnv = (webpackConfig, env) => {
  if (
    webpackConfig.hasOwnProperty("plugins") &&
    webpackConfig.plugins.length > 0
  ) {
    webpackConfig.plugins[0].definitions["process.env"] = JSON.stringify({
      ...webpackConfig.plugins[0].definitions["process.env"],
      ...env
    });
  }

  return webpackConfig;
};

const _addResolvers = (webpackConfig, resolvers) => {
  for (const key in resolvers) {
    resolvers[key] = path.join(location.CURRENT_TERMINAL_PATH, resolvers[key]);
  }

  return {
    ...webpackConfig,
    resolve: {
      ...(webpackConfig.hasOwnProperty("resolve") ? webpackConfig.resolve : {}),
      alias: {
        ...(webpackConfig.resolve.hasOwnProperty("alias")
          ? webpackConfig.resolve.alias
          : {}),
        ...resolvers
      }
    }
  };
};

const applyPorseaConfig = webpackConfig => {
  const porseaConfigPath = path.resolve(
    location.CURRENT_TERMINAL_PATH,
    "porsea.config.js"
  );
  const porseaConfig = require(porseaConfigPath);

  if (porseaConfig.hasOwnProperty("env")) {
    webpackConfig = _overrideEnv(webpackConfig, porseaConfig.env);
  }

  if (porseaConfig.hasOwnProperty("resolvers")) {
    webpackConfig = _addResolvers(webpackConfig, porseaConfig.resolvers);
  }

  return webpackConfig;
};

module.exports = applyPorseaConfig;
