/*
============================================
; Title:  hughes-2.3.js
; Author: Joshua Hughes
; Date:   04 June 2019
; Description: Demonstrates how to define and call function properties
;===========================================
*/

//require header file
const header = require('./hughes-header.js');

//use header display function
console.log(header.display("Joshua", "Hughes", "Exercise 2.3"));


// function property definitions
myName.josh = "Joshua Hughes";

/**
 * Params: none
 * Response: function property value
 * Description: returns the value assigned to a function property
 */
function myName() {
  return myName.josh
}

//output
/*
  Expected output:

  Joshua Hughes
  Exercise 2.3
  Today's Date

  Hello Joshua Hughes!
*/
console.log("\nHello " + myName()+ "!");



