// Porsea Framework
// Created by Cashfazz Team
// To contribute visit: https://github.com/payfazz/porsea

const path = require("path");

const LOCATION = {
  CURRENT_DIRECTORY: __dirname,
  PUBLIC_PATH: "/",
  CURRENT_TERMINAL_PATH: process.cwd(),
  INDEX_HTML_PATH: path.join(process.cwd(), "/src/index.html")
};

module.exports = LOCATION;
