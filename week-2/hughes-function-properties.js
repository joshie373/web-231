/*
============================================
; Title:  hughes-header-test.js
; Author: Joshua Hughes
; Date:   04 June 2019
; Description: Demonstrates how to define and call function properties
;===========================================
*/

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
console.log(myName());
