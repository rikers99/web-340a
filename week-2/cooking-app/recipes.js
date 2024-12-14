/**
 * Author:  steve culmer
 * Date:  19 nov 24
 * File Name:  recipes.js
 * Description:
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  // TODO: Implement this function
  // Array of recipes
const recipes = [
  { name: "Pasta", ingredients: "Noodles, Tomato Sauce" },
  { name: "Salad", ingredients: "Lettuce, Tomato, Cucumber" },
  { name: "Soup", ingredients: "Broth, Vegetables" }
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

// Define the setTimer function
function setTimer(minutes) {
  // TODO: Implement this function
  function setTimer(minutes) {
    let seconds = minutes * 60; // Convert minutes to seconds
    let timerInterval = setInterval(() => {
      seconds--; 
      // Update your display with the remaining time (seconds) here
      if (seconds < 0) {
        clearInterval(timerInterval); 
        // Trigger your "timer finished" action here
      }
    }, 1000); // Update every 1 second
  }
}

// Define the quit function
function quit() {
  // TODO: Implement this function
  function myFunction() {
    if(a == 'stop') 
        return false;
  }
}

// TODO: Export the functions
export { myFunction
}
