/*
============================================
; Title:  hughes-3.4.js
; Author: Joshua Hughes
; Date:   12 June 2019
; Description: loops through random numbers to
;  compare their values to a constant variable
;===========================================
*/

//===============header include======================
//require header file
const header = require('../hughes-header.js');

//use header display function
console.log(header.display("Joshua", "Hughes", "Assignment 3.4"));

//line break
console.log("\n");
//===============header include======================

//global variable definitions
var globalNumber = 6;

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1);
}

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
    "'"+param1+"' does not match '"+param2+"'!");
}


/**
* Params: param1, param2
* Response: string
* Description: returns a string message with the two parameters saying they do match.
*/
function logMatch(param1,param2){
  console.log(
    "'"+param1+"' does match '"+param2+"'!"
  );
}

//instructions loop; runs 10 iterations
console.log("-- DO THE NUMBERS MATCH GAME --");
for (var i=0; i < 10; i++) {
  var localRandom = randomNumber();
  if (match(localRandom, globalNumber)) {
    logMatch(localRandom, globalNumber);
  } else {
    logMismatch(localRandom, globalNumber);
  }
}



//alternative loop; runs until match is found
console.log("\n------------------------------------"+
"\nAlternative loop, runs until match is found\n");
for (var i=0;; i++) {
  var localRandom = randomNumber();
  if (match(localRandom, globalNumber)) {
    logMatch(localRandom, globalNumber);
    console.log("it took "+(i+1)+" tries to find a match")
    break;
  } else {
    logMismatch(localRandom, globalNumber);
  }
}


