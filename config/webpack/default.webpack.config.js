// Porsea framework
// Created by payfazz team
// If you want to contribute visit here : https://github.com/payfazz/porsea
var path = require("path");

var rootPath = `${__dirname}/../..`;
var mode = process.env.NODE_ENV || "development";

var config = {
  mode: mode,
  entry: {
    addon: ["@babel/polyfill"],
    main: path.resolve(rootPath, "container/index.js")
  },
  output: {
    path: path.resolve(rootPath, "build"),
    filename: "[contenthash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader?cacheDirectory=true",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader"
        }
      }
    ]
  }
};

module.exports = config;
