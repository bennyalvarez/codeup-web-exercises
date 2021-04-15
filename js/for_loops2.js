"use strict";

function showMultiplicationTable(number) {
    for(var multiplier = 1; multiplier <=10; multiplier++) {
        console.log(number + " * " + multiplier + " = " + multiplier*number);
    }
}
console.log(showMultiplicationTable(7));



for(var i = 0; i<10; i++) {
    var random = Math.floor(Math.random() * 181) + 20;
    if (random % 2 === 0) {
        console.log(random + " is even.");
    } else {
        console.log(random + " is odd.")
    }
}

for(var i = 0; i < 10; i++) {
    var duplicate = "";
    for(var o = 0; o < i; o++) {
        duplicate += i;
    }
    console.log(duplicate);
}

for(var i = 100; i > 0; i=i-5) {
    console.log(i);
}




























