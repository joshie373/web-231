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

/**
 * Params: array, string
 * Response: elements of an array
 * Description:  iterates over the parameterized array
 * and outputs the results using the console.log() function.
 * also output filtered string if present
 */
function getValue(array,string){
  for (let i=0; i<array.length; i++){
    if (!string) {
      if(i==0){
        console.log("-- DISPLAYING ARRAY ITEMS --");
      }
      console.log(array[i]);
    }
    else if(string==array[i]){
      console.log("\n");
      console.log("-- SELECTED VALUE --");
      console.log(string);
    }

  }
}

//outputs
getValue(vehicles);
getValue(vehicles,"Train");
getValue(vehicles,"Truck");
