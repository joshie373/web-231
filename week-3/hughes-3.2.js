/*
============================================
; Title:  hughes-3.2.js
; Author: Joshua Hughes
; Date:   12 June 2019
; Description: pattern matching functions
;===========================================
*/

//===============header include======================
//require header file
const header = require('../hughes-header.js');

//use header display function
console.log(header.display("Joshua", "Hughes", "Assignment 3.2"));

//line break
console.log("\n");
//===============header include======================

//global variable definitions
var
test1 = "monkey",
test2 = "chimp",
test3 = "baboon",
test4 = "monkey",
test5 = "camel",
test6 = "tiger";

/**
* Params: param1, param2
* Response: boolean
* Description: returns a boolean indicating if parameters match.
*/
function match(param1,param2){
  //if..else
  if (param1===param2) {
    return true;
  }
  else{
    return false;
  }
}

/**
* Params: param1, param2
* Response: string
* Description: returns a string message with the two parameters saying they do not match.
*/
function logMismatch(param1,param2){
  console.log(
    "The value '"+param1+"' does not match the value '"+param2+"'."
  );
  console.log("\n");//line break
}


/**
* Params: param1, param2
* Response: string
* Description: returns a string message with the two parameters saying they do match.
*/
function logMatch(param1,param2){
  console.log(
    "The value '"+param1+"' is the same as the value '"+param2+"'."
  );
  console.log("\n");//line break
}

//if..else statement
if (match(test1,test4)) {
  logMatch(test1,test4);
}
else{
  logMismatch(test1,test4);
}

//if..else statement
if (match(test2,test5)) {
  logMatch(test2,test5);
}
else{
  logMismatch(test2,test5);
}

//if..else statement
if (match(test3,test6)) {
  logMatch(test3,test6);
}
else{
  logMismatch(test3,test6);
}
