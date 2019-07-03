/*
============================================
; Title:  hughes-6.3.js
; Author: Joshua Hughes
; Date:   3 July 2019
; Description: Exhibits object collections
;===========================================
*/

//===============header include======================
//require header file
const header = require('../hughes-header.js');

//use header display function
console.log(header.display("Joshua", "Hughes", "Exercise 6.3"));

//line break
console.log("\n");
//===============header include======================

//global variable definitions
var ticket = {
    id : "120053",
    
    name : "Trouble with objects",
    
    requester: "Josh Test"
};

console.log("{id: "+ticket.id +", name: "+ticket.name+", requester: "+ticket.requester+"}")
