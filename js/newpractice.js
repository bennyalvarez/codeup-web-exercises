"use strict";

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed
// to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(num) {
    var sum = 0;
    for(var i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(addUp(5));


// Luke Skywalker has family and friends. Help him remind them who is who.
// Given a string with a name, return the relation of that person to Luke.
// Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid
// Examples
//create a variable for the object



// Create a function that takes two numbers as arguments (num, length)
// and returns an array of multiples of num up to length.
//do a for loop, understand length




/*Create a function that takes an array of numbers or letters and returns a string.

arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"*/




//BONUS
// Create a function which takes in an encoded string and returns an object according
// to the following example:
// Examples

// parseCode("John000Doe000123") ➞ {
//   firstName: "John",
//   lastName: "Doe",
//   id: "123"
// }

// parseCode("michael0smith004331") ➞ {
//   firstName: "michael",
//   lastName: "smith",
//   id: "4331"
// }

// parseCode("Thomas00LEE0000043") ➞ {
//   firstName: "Thomas",
//   lastName: "LEE",
//   id: "43"
// }