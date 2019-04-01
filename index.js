#!/usr/bin/env node

const yargs = require("yargs");
const startPorsea = require("./cmds/startPorsea");
const buildPorsea = require("./cmds/buildPorsea");

const argv = yargs
  .command(
    "start",
    "Start Porsea Project",
    yargs => yargs.option("port", { alias: "p", default: 3000 }),
    startPorsea
  )
  .command("build", "Build Porsea Project", buildPorsea)
  .demandCommand(1, "")
  .strict().argv;
