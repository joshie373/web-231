/*
============================================
; Title:  hughes-4.4.js
; Author: Joshua Hughes
; Date:   18 June 2019
; Description: demonstrates filtering arrays
;===========================================
*/

//===============header include======================
//require header file
const header = require('../hughes-header.js');

//use header display function
console.log(header.display("Joshua", "Hughes", "Assignment 4.4"));

//line break
console.log("\n");
//===============header include======================

//global variable definitions
var cities = ["Phoenix","Mesa","Gilbert","Camp Verde","Tucson"];

/**
 * Params: index, filter
 * Response: true/false
 * Description: Returns true/false given the comparison
 */
function get_value(index,filter){
 return index === filter;
}

// unsorted array using JavaScript's built-in forEach() function
console.log("-- ORIGINAL ARRAY --");
cities.forEach(cities => console.log(cities));

// new line
console.log("\n");

// sorted array using JavaScript's built-in sort() and forEach() functions
console.log('-- SORTED ARRAY --');
cities.sort().forEach(cities => console.log(cities));


// new line
console.log("\n");
// output
console.log("-- SELECTED VALUE --");
console.log(
  cities.filter // built-in JavaScript function for returning a subset of records
  (
    function (index) {
      return get_value(index, "Mesa") // use the get_value function to return a matching city
    }
  )[0] // return the first element in the return array
);

