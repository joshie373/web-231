/*
============================================
; Title:  hughes-4.2.js
; Author: Joshua Hughes
; Date:   18 June 2019
; Description: pattern matching functions
;===========================================
*/

//===============header include======================
//require header file
const header = require('../hughes-header.js');

//use header display function
console.log(header.display("Joshua", "Hughes", "Exercise 4.2"));

//line break
console.log("\n");
//===============header include======================

//global variable definitions
var fruits = ["Apple","Banana","Kiwi","Cantaloupe","Watermelon"];

/**
 * Params: array
 * Response: elements of an array
 * Description:  iterates over the parameterized array
 * and outputs the results using the console.log() function.
 */
function getFruits(array){
  for (var i=0; i <array.length; i++){
    console.log(array[i]);
  }
}

//output
getFruits(fruits);
