// Porsea Framework
// Created by Cashfazz Team
// To contribute visit: https://github.com/payfazz/porsea

const path = require("path");

const LOCATION = {
  PORSEA_DIRECTORY: path.resolve(__dirname, "../"), // Path to porsea inside node_modules
  PUBLIC_PATH: "/",
  CURRENT_TERMINAL_PATH: process.cwd(), // Path to the project
  INDEX_HTML_PATH: path.join(process.cwd(), "./src/index.html")
};

module.exports = LOCATION;
