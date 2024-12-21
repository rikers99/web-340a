// TODO: Implement this script
"use strict";

const { spawnSync } = require("child_process");

const command = process.platform === "win32" ? "dir" : "ls";
const child = spawnSync(command); // no arguments
console.log("stdout:", child.stdout.toString());