"use strict";

// function fizzBuzz(input) {
//     if(input % 3) {
//         for (var i = 0; i > 30)
//     }
// }
//
// for (var i=1; i < 31; i++){
//     if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }

//David's version...

(() => {
    const fizzBuzz = numTil => {
        for (let x = 1; x <= numTil; x++) {   //numTil in this case is up to 30
            if (x % 3 === 0 && x % 5 === 0) {  //needs to be first since most specific
                console.log("FizzBuzz");
            } else if (x % 3 === 0) {
                console.log("Fizz");
            } else if (X % 5 === 0) {
                console.log("Buzz");
            } else {
                console.log(x);
            }
        }
    }

    fizzBuzz(30);
})();

//Write a function that returns number 7

// function seven(input) {
//     return 7;
// };

const returnSeven = () => 7;

console.log(returnSeven);