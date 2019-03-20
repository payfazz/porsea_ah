// Porsea framework
// Created by payfazz team
// If you want to contribute visit here : https://github.com/payfazz/porsea
var path = require("path");

var rootPath = `${__dirname}/../..`;
var mode = process.env.NODE_ENV || "development";

var config = {
  mode: mode,
  entry: {
    main: path.resolve(rootPath, "container/index.js")
  },
  output: {
    path: path.resolve(rootPath, "build"),
    filename: "[name].[contenthash].js"
  }
};

module.exports = config;
