/*
============================================
; Title:  hughes-4.3.js
; Author: Joshua Hughes
; Date:   18 June 2019
; Description: demonstrates filtering arrays
;===========================================
*/

//===============header include======================
//require header file
const header = require('../hughes-header.js');

//use header display function
console.log(header.display("Joshua", "Hughes", "Exercise 4.3"));

//line break
console.log("\n");
//===============header include======================

//global variable definitions
var vehicles = ["Car","Truck","Motorcycle","Boat","Train"];


// output
console.log("-- DISPLAYING ARRAY ITEMS --");
for (let i = 0; i < vehicles.length; i++) {
  console.log(vehicles[i]);
}

// new line
console.log("\n");

// output
console.log(" -- SELECTED VALUE --");
console.log(getValue(vehicles, "Train"));

// new line
console.log("\n");

// output
console.log(" -- SELECTED VALUE --");
console.log(getValue(vehicles, "Truck"));

/**
 * Params: array, string
 * Response: array element
 * Description: Returns a filtered value from an array
 */
function getValue(array, string) {
  for (let j = 0; j < array.length; j++) {
    if (array[j] === string) {
      return array[j];
    }
  }
}
