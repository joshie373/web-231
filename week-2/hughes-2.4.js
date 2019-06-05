/*
============================================
; Title:  hughes-2.4.js
; Author: Joshua Hughes
; Date:   04 June 2019
; Description: demonstrates how to use functions and their properties
;===========================================
*/

//require header file
const header = require('./hughes-header.js');

//use header display function
console.log(header.display("Joshua", "Hughes", "Assignment 2.4"));

//line break
console.log("\n");

/**
* Params: firstName, lastName
* Response: output
* Description: returns the two Names as a concatenated string
*/
function full_name(firstName, lastName) {
  let output = firstName + ' ' + lastName;
  return output;
}

/**
* Params: year, month, day
* Response: output
* Description: returns a fully qualified JavaScript date object
*/
function date_writer(year,month,day) {
  let output = new Date(year,month-1,day).toLocaleDateString('en-US');
  return output;
}

/**
* Params: number and numOfPos
* Response: output
* Description: returns the formatted temperature value
*/
function format_number(number,numOfPos) {
  let output = number.toFixed(numOfPos);
  return output;
}


/**
* Params: string
* Response: output
* Description: returns the string value as a parsed integer.
*/
function convert_to_int(string) {
  let output = parseInt(string);
  return output;
}

/**
* Params: string
* Response: output
* Description: returns the string value as a parsed float value.
*/
function convert_to_float(string) {
  let output = parseFloat(string);
  return output;
}


//output
console.log("Hello my name is " + full_name("Joshua","Hughes") + "!");

console.log("\n");//line break

console.log("Today's date is " + date_writer("2019","06","04") +
" and the current temperature is " + format_number(65.66,"1") + " degrees.");

console.log("\n");//line break

console.log("I am " + convert_to_int("29") + " years old, and my savings account goal is " +
convert_to_float("25000.00") + " dollars.");


