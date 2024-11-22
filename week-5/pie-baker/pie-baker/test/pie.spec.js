/**
 * Author: steve culmer
 * Date: 19 nov 24
 * File Name: pie-spec.js
 * Description: 
 */

"use strict";

function bakePie() {
    // Array of ingredients
const recipes = [
    { name: "flour", ingredients: "flour" },
    { name: "sugar", ingredients: "sugar" },
    { name: "butter", ingredients: "butter" }
   ];
   // main function for the program;
   // displays the recipe name and ingredients to the console
   function main() {
    for (let i = 0; i < recipes.length; i++) {
    console.log("Recipe: " + recipes[i].name + "\nIngredients: " + recipes[i].ingredients);
    console.log(""); // new line
    }
   }
   // call the main function
   main();
   
}

// src/tasks.js
"use strict";

function flour() {
    setTimeout(() => {
    console.log("flour has been added.");
    }, 2000);
   }
   function sugar() {
    process.nextTick(() => {
    console.log("sugar has been added.");
    });
   }
   function butter() {
    setTimeout(() => {
    console.log("butter has been added.");
    }, 1000);
   }
   module.exports = { flour, sugar, butter };
