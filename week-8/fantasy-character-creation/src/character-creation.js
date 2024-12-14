/*
  Pragmatic JavaScript
  Chapter 8
  Programming Assignment

  Author:  Steve Culmer
  Date:  14 dec 24
  Filename: character creation.js
*/

"use strict";

/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// character.js
class Character {
  constructor(name, race, classType) {
    this.name = name;
    this.race = race;
    this.classType = classType;
    this.stats = {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10
    };
  }

  saveCharacter(filePath) {
    const fs = require('fs');
    fs.writeFileSync(filePath, JSON.stringify(this));
  }
}

module.exports = Character;

// character.test.js
const Character = require('./character');
const fs = require('fs');

test('Character creation', () => {
  const character = new Character('Aragorn', 'Human', 'Ranger');
  expect(character.name).toBe('Aragorn');
  expect(character.race).toBe('Human');
  expect(character.classType).toBe('Ranger');
});

test('Character saving', () => {
  const character = new Character('Legolas', 'Elf', 'Archer');
  const filePath = 'test_character.json';
  character.saveCharacter(filePath);

  const data = fs.readFileSync(filePath);
  const savedCharacter = JSON.parse(data);

  expect(savedCharacter.name).toBe('Legolas');
  expect(savedCharacter.race).toBe('Elf');
  expect(savedCharacter.classType).toBe('Archer');

  fs.unlinkSync(filePath);
});
