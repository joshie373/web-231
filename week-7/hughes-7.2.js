/*
============================================
; Title:  hughes-7.2.js
; Author: Joshua Hughes
; Date:   10 July 2019
; Description: demonstrates constructor objects
;===========================================
*/

//===============header include======================
//require header file
const header = require('../hughes-header.js');

//use header display function
console.log(header.display("Joshua", "Hughes", "Exercise 7.2"));

//line break
console.log("\n");
//===============header include======================

/**
 * Params: id,firstName,lastName,title
 * Response: employee object
 * Description:  constructor for a new employee object.
 */
function Employee(id, firstName,lastName,title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

//employees array using Employee object constructor
var employees = [
  new Employee(
    1005,
    "John",
    "Smith",
    "Product Owner"
  ),
  new Employee(
    1006,
    "Mike",
    "Jones",
    "Developer"
  ),
  new Employee(
    1007,
    "Rick",
    "James",
    "Database Operations Manager"
  ),
  new Employee(
    1008,
    "Steve",
    "Williams",
    "Global Operations Manager"
  ),
  new Employee(
    1009,
    "Chris",
    "Kelley",
    "Network Architect"
  )
]

//ouput
employees.forEach(employee => {
  console.log(
    employee.id +
    " - "+
    employee.firstName +
    " "+
    employee.lastName +
    " - "+
    employee.title
  );
});

