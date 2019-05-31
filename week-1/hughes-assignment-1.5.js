/* 
============================================ 
; Title: Assignment 1.5
; Author: Joshua Hughes 
; Date: 30 May 2019 
; Modified By: Joshua Hughes 
; Description: This program demonstrates the
; use of JavaScript types, values, and
; and variables in an application.
;===========================================
*/ 

//variable declarations and assignments
//as a note, a class would be more efficient here,
//but since we dont learn about them for a 
//few weeks, we are going to do it the long way

//Employee 1
var firstName1 = "Bill"; 
var lastName1 = "Williams";
var address1 = "1234 Test Street";
var payRate1 = 32.55;
var hireDate1 = new Date(2016,02,25);//march 25,2016

//Employee 2
var firstName2 = "Steve"; 
var lastName2 = "James";
var address2 = "5678 Try Ave";
var payRate2 = 16.47;
var hireDate2 = new Date(2017,11,17);//december 17, 2017

//Employee 3
var firstName3 = "Mark"; 
var lastName3 = "Jones";
var address3 = "1234 Example Lane";
var payRate3 = 18.96;
var hireDate3 = new Date(2018,04,29);//may 29, 2018

//outputs Employee 1
console.log("Employee 1");
console.log(firstName1);
console.log(lastName1);
console.log(address1);
console.log(payRate1.toFixed(1));//formats to 1 decimal place
console.log(hireDate1.toLocaleDateString());//formats date to mm/dd/yyyy format
console.log("--------------------");

//outputs Employee 2
console.log("Employee 2");
console.log(firstName2);
console.log(lastName2);
console.log(address2);
console.log(payRate2.toFixed(1));//formats to 1 decimal place
console.log(hireDate2.toLocaleDateString());//formats date to mm/dd/yyyy format
console.log("--------------------");

//outputs Employee 3
console.log("Employee 3");
console.log(firstName3);
console.log(lastName3);
console.log(address3);
console.log(payRate3.toFixed(1));//formats to 1 decimal place
console.log(hireDate3.toLocaleDateString());//formats date to mm/dd/yyyy format