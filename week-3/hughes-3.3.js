/*
============================================
; Title:  hughes-3.3.js
; Author: Joshua Hughes
; Date:   12 June 2019
; Description: using control statements if statement to switch
;===========================================
*/

//===============header include======================
//require header file
const header = require('../hughes-header.js');

//use header display function
console.log(header.display("Joshua", "Hughes", "Exercise 3.3"));

//line break
console.log("\n");
//===============header include======================


let eventKeyCode = 13

// if (eventKeyCode === 13) {
//   console.log('The enter key was pressed.')
// } else if (eventKeyCode === 16) {
//   console.log('The shift key was pressed.')
// } else if (eventKeyCode === 32) {
//   console.log('The spacebar key was pressed.')
// } else if (eventKeyCode === 8) {
//   console.log('The backspace / delete key was pressed.')
// } else {
//   console.log('Unrecognized key.')
// }

//switch statement
switch (eventKeyCode) {
  case 13:
    console.log('The enter key was pressed.')
    break;
  case 16:
    console.log('The shift key was pressed.')
    break;
  case 32:
    console.log('The spacebar key was pressed.')
    break;
  case 8:
    console.log('The backspace / delete key was pressed.')
    break;

  default:
    console.log('Unrecognized key.')
    break;
}
