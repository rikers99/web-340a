/**
 * Author:  Steve Culmer
 * Date:  26 Oct 24
 * File Name:  weight-converter.js
 * Description:  convert pounds into kilograms
*/

"use strict";

// File: weight-converter.js
const readline = require("readline"); // import readline module
function main() {
 // create readline interface object
 const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
 });
 // prompt the user to input weight in pounds
 rl.question("Enter the weight in pounds: ", function (weight) {
 rl.question("Print the weight in kilograms: ", function (kilograms) {
 // check if the input is a number
 if (isNaN(weight)) {
 console.error("Input must be a number."); // display error message
 process.exit(1); // exit with a non-zero error code
 }

 const weight = (pounds / 16).toFixed(2); // convert pounds to kilograms
 console.log(
 `For ${pounds}, ${kilograms} kilograms is equivalent to ${pounds} pounds.`
 ); // display the conversion
 rl.close(); // close the readline object
 });
 });
}
main(); // call the main function