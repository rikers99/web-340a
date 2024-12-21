// TODO: Implement this script
"use strict";

const { fork } = require("child_process");

const GameCharacter = ["Fantasy Game Characters"];

GameCharacter.forEach((characters) => {
 const child = fork("game-characters.js"); // fork a new process
 child.send(characters); // send the characters to the child process

 child.on("message", (message) => {
    console.log("Child process for " + characters + " is " + message);
 });
});