"use strict";

function showMultiplicationTable(number) {
    for(var multiplier = 1; multiplier <=10; multiplier++) {
        console.log(number + " * " + multiplier + " = " + multiplier*number);
    }
}
//showMultiplicationTable(7);


function showEvenorOdd() {
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
//showEvenorOdd();

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


    for (var i = 100; i > 0; i = i - 5) {
        console.log(i);
    }


function askForNumber() {
    var userInput = parseInt(prompt("Give an odd number between 1 and 50."));
    var continueLoop = true;
    while (userInput > 0 && userInput <= 50 && continueLoop) {
        if (userInput % 2 === 1) {
            debugger;
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
    //while (oddNumber !== "You're never gonna come up with this.") {
    //    oddNumber = parseFloat(prompt("Please enter an odd number between 1 and 50."));
    //    if (oddNumber % 2 === 1 || (oddNumber > 0 && oddNumber < 50)) {
    //        continue;
    //    }
    //}
    //while (oddNumber % 2 !== 1 || oddNumber < 1 || oddNumber > 50) {
    //    oddNumber = parseFloat(prompt("Please enter an odd number between 1 and 50."));
    //    if (oddNumber % 2 === 1) {
    //        break;
    //    }
    //}
}
askForNumber();



















