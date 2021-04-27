"use strict";

/*//#2 Exercise Multiplication Table
function showMultiplicationTable(number) {
    for(var multiplier = 1; multiplier <=10; multiplier++) {
        console.log(number + " * " + multiplier + " = " + multiplier*number);
    }
}
showMultiplicationTable(7);

//#3. Use a for loop and the code from the previous lessons to generate 10 random numbers
// between 20 and 200 and output to the console whether each number is odd or even.

function showEvenOrOdd() {
    for (var i = 0; i < 10; i++) {
        var r = Math.random();
        var random = Math.floor(r * 181) + 20;
        if (random % 2 === 0) {
            console.log(random + " is even.");
        } else {
            console.log(random + " is odd.")
        }
    }
}
showEvenOrOdd();


//4. Pyramid Exercise

function numberPyramid() {
    for (var i = 0; i < 10; i++) {
       var duplicate = "";
       for (var o = 0; o < i; o++) {
           duplicate += i;
       }
       console.log(duplicate);
   }
}
numberPyramid();

function numPyramid() {
    for (var i = 0; i <= 5; i++) {
        var addOn = "";
        for (var g = 0; g < i; g++) {
            addOn += i;
        }
       console.log(addOn);
    }
}
numPyramid();

//5. To-Do: Create a for loop that uses console.log to create the output shown below.


    for (var i = 100; i > 0; i = i - 5) {
        console.log(i);
    }

//Break and Continue Exercise

function askForNumber() {
    var userInput = parseInt(prompt("Give an odd number between 1 and 50."));
    var continueLoop = true;
    while (userInput > 0 && userInput <= 50 && continueLoop) {
        if (userInput % 2 === 1) {

            for(var i = 1; i <= 50; i++) {
                if (i % 2 === 0) continue;
                if (userInput === i) {
                    console.log("Yikes! Skipping number: " + userInput);
                } else {
                    console.log("Here is an odd number: " + i);
                }
            }
            continueLoop = false; //print out odd numbers.
        } else {
            userInput = parseInt(prompt("The number you entered is not odd. Please enter an odd number between 1 and 50."));
        }
    }
}
askForNumber();

//While Loop*/

function askForNumber() {
    var userInput = parseInt(prompt("Give an odd number between 1 and 50."));
    var continueLoop = true;
    while (userInput > 0 && userInput <= 50 && continueLoop) {
        if (userInput % 2 === 1) {

            for(var i = 1; i <= 50; i++) {
                if (i % 2 === 0) continue;
            else if (userInput === i) {
                    console.log("Yikes! Skipping number: " + userInput);
                } else {
                    console.log("Here is an odd number: " + i);
                }
            }
            continueLoop = false; //print out odd numbers.
        } else {
            userInput = parseInt(prompt("The number you entered is not odd. Please enter an odd number between 1 and 50."));
        }
    }
}
askForNumber();





















