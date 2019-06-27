/*
============================================
; Title:  hughes-5.4.js
; Author: Joshua Hughes
; Date:   26 June 2019
; Description: demonstrates JS builtin map function
;===========================================
*/

//===============header include======================
//require header file
const header = require('../hughes-header.js');

//use header display function
console.log(header.display("Joshua", "Hughes", "Assignment 5.4"));

//line break
console.log("\n");
//===============header include======================

//global definitions
//array-like object
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


// return a new list of composers with only the rating field
var composersByRating = composers.map((composer) => {
  return composer.rating;
});


// return a new list of composers with only the genre field
var composersByGenre = composers.map((composer) => {
  return composer.genre;
});



//outputs list of composers by rating
console.log("-- COMPOSER BY RATING --");
composersByRating.forEach((rating,index) => {
  console.log("Rating: "+rating);
  console.log("Composer: "+ composers[index].lastName);
  console.log("\n");
});

//outputs list of composers by genre
console.log("-- COMPOSER BY GENRE --");
composersByGenre.forEach((genre,index) => {
  console.log("Genre: "+genre);
  console.log("Composer: "+ composers[index].lastName);
  console.log("\n");
});
