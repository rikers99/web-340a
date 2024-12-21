/**
 * Author:  Steve Culmer
 * Date:  26 Oct 24
 * File Name:  weight-converter.js
 * Description:  convert pounds into kilograms
*/

"use strict";

function main() {
  // Get command line arguments 
  // arguments 0: Program, 1: Script, 2: User input
  const args = process.argv; // Array[strings] 
  
  // If no arguments, return error 
  if (args.length < 3) {
    console.log("Usage: node weight-converter.js <pounds>"); 
	process.exit(1); // exit with a non-zero error code
  } 
  
  // If arguments, parse int 
  const weight = parseInt(args[2]); 

  // If not an int, display error 
  if (isNaN(weight)) {
    console.error("Input must be a number."); // display error message
    process.exit(1); // exit with a non-zero error code
  }
  
  // If int, do conversion and output
  const kilograms = (weight / 2.20462).toFixed(2); // convert pounds to kilograms
  console.log(`${kilograms}`); // display the conversion
}



main(); // call the main function