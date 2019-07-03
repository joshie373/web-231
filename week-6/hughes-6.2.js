/*
============================================
; Title:  hughes-6.2.js
; Author: Joshua Hughes
; Date:   3 July 2019
; Description: exception handling
;===========================================
*/

//===============header include======================
//require header file
const header = require('../hughes-header.js');

//use header display function
console.log(header.display("Joshua", "Hughes", "Exercise 6.2"));

//line break
console.log("\n");
//===============header include======================



try {
    // variables
    var x = "world";
  
    // if statement
    if (isNaN(x)) throw 'NotaNumberException';
  
    // output
    console.log(x);
  } 
catch (err) {
    console.log('Catch clause: ' + err)
  } 
finally {
    console.log('Finally clause reached...')
  }