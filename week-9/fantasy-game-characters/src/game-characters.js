// game-characters.js
const { spawn } = require("child_process");

class GameCharacters {
  constructor() {
    // TODO: Set the script file path
    "use strict";
    
    const GameCharacter = ["Fantasy Game Characters"];
    
    GameCharacter.forEach((getCharacters) => {
    console.log("GameCharacter:", getCharacters);
});
  }

  getCharacters(callback) {
    // TODO: Implement this method
    "use strict";
    
    const { spawnSync } = require("child_process");
    
    const child = spawnSync("node", ["game-characters.js"]);
    
    console.log(child.stdout.toString());
  }
}

module.exports = { GameCharacters };