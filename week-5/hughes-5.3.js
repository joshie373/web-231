/*
============================================
; Title:  hughes-5.3.js
; Author: Joshua Hughes
; Date:   26 June 2019
; Description: Exhibits object collections
;===========================================
*/

//===============header include======================
//require header file
const header = require('../hughes-header.js');

//use header display function
console.log(header.display("Joshua", "Hughes", "Exercise 5.3"));

//line break
console.log("\n");
//===============header include======================

//global definitions
//object-like array
var composers = [
  {
    firstName:  "Claude",
    lastName:   "Debussy",
    genre:      "Classical",
    rating:     "4"
  },
  {
    firstName:  "Mark",
    lastName:   "Alessi",
    genre:      "Gospel",
    rating:     "6"
  },
  {
    firstName:  "Kate",
    lastName:   "Soper",
    genre:      "Avant-garde",
    rating:     "3"
  },
  {
    firstName:  "Chris",
    lastName:   "Gall",
    genre:      "Jazz",
    rating:     "5"
  },
  {
    firstName:  "Buddy",
    lastName:   "Feyne",
    genre:      "American Musical Theatre",
    rating:     "7"
  }
];

// unsorted array using JavaScript's built-in forEach() function
console.log("-- COMPOSERS --");
composers.forEach(composers => console.log(
  "Last Name: "+
  composers.lastName+
  ", Genre: "+
  composers.genre+
  ", Rating: "+
  composers.rating
));
