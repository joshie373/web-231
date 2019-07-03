/*
============================================
; Title:  hughes-6.4.js
; Author: Joshua Hughes
; Date:   3 July 2019
; Description: demonstrates JS builtin map function
;===========================================
*/

//===============header include======================
//require header file
const header = require('../hughes-header.js');

//use header display function
console.log(header.display("Joshua", "Hughes", "Assignment 6.4"));

//line break
console.log("\n");
//===============header include======================

var ticket = {
    id: "105",
    name: "Support Ticket",
    dateCreated: new Date().toLocaleDateString("en-US"),
    priority: "4",
    personId: "",
    person: {
        id: "1005",
        firstName: "Joshua",
        lastName: "Hughes",
        jobTitle: "Engineer"
    },

};

console.log(
    "Ticket "+
    ticket.id+
    " was created on "+
    ticket.dateCreated+
    " and assigned to employee "+
    ticket.person.firstName +" "+ ticket.person.lastName+
    " ("+
    ticket.person.jobTitle+
    ")."
);

