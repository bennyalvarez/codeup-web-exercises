"use strict";

var num = 1
while(num < 65536) {
    console.log(2 + " to the power of " + num + " is equal to: " + (num * 2));
    num = num * 2
}

//var number = Math.floor(Math.random() * 6) +1;
//var guess;

//do {
//    guess = parseInt(prompt("Enter a number between 1 and 6"));
//} while (guess !== number);

//alert("Your guess of " + guess + " matches the number " + "!");

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var conesBought = Math.floor(Math.random() * 5) + 1;
    if (conesBought > allCones) {
        console.log("I cant sell " + conesBought + " I only have  " + allCones + " left sorry");
    } else {
        allCones = allCones - conesBought;
        console.log("Cones Sold " + conesBought + " I have " + allCones + " left to sell");
    }
} while (allCones > 0);
