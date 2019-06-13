/*
============================================
; Title:  hughes-3.1.js
; Author: Joshua Hughes
; Date:   11 June 2019
; Modified By: Joshua Hughes
; Description: Demonstrates control statement
;  functionalities
;  /determines if a random color is a primary
;  or secondary color
;===========================================
*/

//global variable declarations
var colors =  [
    "red",
    "yellow",
    "blue",
    "orange",
    "purple",
    "green"
];

/**
* Params: none
* Response: colorPicked
* Description: returns a random color from the color array as a string
*/
var colorPicker = function(){
    var colorPicked = colors[Math.floor(Math.random() * 6)];
    return colorPicked;
};

/**
* Params: none
* Response: boolean
* Description: returns a boolean indicating if the color is primary or secondary
*/
var isPrimary = function(){
    /**
     * switch statement takes a new colorPicker value and returns boolean
     * indicating a primary color
     */
    switch (colorPicker()) {
        case red:
            return true;

        case "blue":
            return true;

        case "yellow":
            return true;

        case "green":
            return false;

        case : "purple":
            return false;

        case "orange":
            return false;
    }

};

/**
 * if statement controls the output
 * evaluates the boolean value and if true, outputs primary output
 * else outputs secondary output
 */
if (isPrimary()) {
    console.log(
        "Your chosen color is a primary color."
    );
}
else{
    console.log(
        "Your chosen color is a secondary color."
    );
}

