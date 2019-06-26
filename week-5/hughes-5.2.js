/*
============================================
; Title:  hughes-5.2.js
; Author: Joshua Hughes
; Date:   26 June 2019
; Description: defines and outputs an array
;===========================================
*/

//===============header include======================
//require header file
const header = require('../hughes-header.js');

//use header display function
console.log(header.display("Joshua", "Hughes", "Exercise 5.2"));

//line break
console.log("\n");
//===============header include======================

//define global variables
var foods = [
  "Shrimp",
  "Steak",
  "Crab Legs",
  "Pasta",
  "Bacon"
];

foods.forEach(foods => console.log(foods));
