/**
 * Author:  Steve Culmer
 * Date:  14 dec 24
 * File Name:  taco stand.js
 * Description:  taco stand emitter
 */

/
/
 ﻿register an event listener for the ‘action’  ﻿event

//  ﻿call the perform action method

const EventEmitter = require("events");

class TacoStandEmitter extends EventEmitter {
  serveCustomer(customer) {
    this.emit("serve", customer);
  }

  prepareTaco(taco) {
    this.emit("prepare", taco);
  }

  handleRush(rush) {
    this.emit("rush", rush);
  }
}

module.exports = TacoStandEmitter;

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");

function testServeCustomer() {
  const tacoStand = new TacoStandEmitter();
  try {
    tacoStand.on("serve", (customer) => {
      assert.strictEqual(customer, "John");
      console.log("Passed testServeCustomer");
    });
    tacoStand.serveCustomer("John");
  } catch (err) {
    console.error(`Failed testServeCustomer: ${err}`);
  }
}

function testPrepareTaco() {
  const tacoStand = new TacoStandEmitter();
  try {
    tacoStand.on("prepare", (taco) => {
      assert.strictEqual(taco, "beef");
      console.log("Passed testPrepareTaco");
    });
    tacoStand.prepareTaco("beef");
  } catch (err) {
    console.error(`Failed testPrepareTaco: ${err}`);
  }
}

function testHandleRush() {
  const tacoStand = new TacoStandEmitter();
  try {
    tacoStand.on("rush", (rush) => {
      assert.strictEqual(rush, "lunch");
      console.log("Passed testHandleRush");
    });
    tacoStand.handleRush("lunch");
  } catch (err) {
    console.error(`Failed testHandleRush: ${err}`);
  }
}

testServeCustomer();
testPrepareTaco();
testHandleRush();

const readline = require("readline");
const TacoStandEmitter = require("./taco-stand");

const tacoStand = new TacoStandEmitter();

tacoStand.on("serve", (customer) => {
  console.log(`Taco Stand serves: ${customer}`);
});

tacoStand.on("prepare", (taco) => {
  console.log(`Taco Stand prepares: ${taco} taco`);
});

tacoStand.on("rush", (rush) => {
  console.log(`Taco Stand handles rush: ${rush}`);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");
  if (command === "serve") {
    tacoStand.serveCustomer(args.join(" "));
  } else if (command === "prepare") {
    tacoStand.prepareTaco(args.join(" "));
  } else if (command === "rush") {
    tacoStand.handleRush(args.join(" "));
  } else {
    console.log("Unknown command");
  }
});

console.log('Enter a command: "serve <name>", "prepare <taco>", or "rush <event>"');


