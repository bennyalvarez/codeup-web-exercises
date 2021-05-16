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

//My Homework

// Luke Skywalker has family and friends. Help him remind them who is who.
// Given a string with a name, return the relation of that person to Luke.
// Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid
// Examples
//create a variable for the object


function lukeFamily(str) {
    var lukeFamBam {

    }
}




// Create a function that takes two numbers as arguments (num, length)
// and returns an array of multiples of num up to length.
//do a for loop, understand length
//multiples are divisible without a remainder

// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.
//
//     Examples:
//
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
//
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
//
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
//
// Notes Notice that num is also included in the returned array.

function multiples(num, length) {
    var newArr = [];
    if(length == undefined)
    for(var i = num; i >)

}




/*Create a function that takes an array of numbers or letters and returns a string.

arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"*/

function changeArray(arr) {
    return arr.toString();
}



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

function newObj(str) {
    var newObject = {
        parseCode: str[0],
        firstName:str[1],
        lastName: str[2],
        id: str[3]
    }
    return newObject;
}