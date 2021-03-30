"use strict";

//function showMultiplicationTable(num) {
 //   for (var  i = 0; i <= 10; i++);
//        return (num * i)

//}

//console.log(showMultiplicationTable(3));

//const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table

//my attempt from google:
//for(let i = 1; i <= 10; i++) {

    // multiply i with number
//    const result = i * 7;

    // display the result
//    console.log(`${7} * ${i} = ${result}`);
//}

// javier's version


function showMultiplicationTable(number) {
    for(var multiplier = 1; multiplier <= 10; multiplier++) {
        console.log(number + " * " + multiplier + " = " + number * multiplier);
    }
}
showMultiplicationTable(7);


//my version exercise #3 but didn't get under 200 as what asked.
var pyramid = Math.floor(Math.random() * 100) +20;

for (var i = 2; i < 10; i++) {

    if (i % 2 === 0) {
        console.log(pyramid * i + " is even.");
    } else {
        console.log(pyramid * i + " is odd.")
    }

}

//javier's version

for(var i = 0; i< 10; i++) {
    var random = Math.floor(Math.random()*181) + 20;
    if (random % 2 === 0) {
        console.log(random + " is even");
    } else {
        console.log(random + " is odd");
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var random, evenOddString;
for (var i = 0; i < 10; i++) {
    random = randomIntFromInterval(20, 200);
    evenOddString = (random % 2 === 0) ? 'even' : 'odd';
 //   console.log
}

//exercise 4

for(var i=1; i<=9; i++) {
    var duplicate = "";
    for (var o= 0; o < i; o++) {
        duplicate += i;
}
    console.log(duplicate);
}

//exercise 5 my version

//for(var i=100; i<=20; i++) {
  // var minusFive = i-5 ;
//}
//console.log(minusFive);


//javier version #5

for (var i = 100; i > 0; i = i -5){
    console.log(i);
}




