"use strict";

function showMultiplicationTable(number) {
    for(var i = 1; i <= 10; i++) {
        console.log(number + "*" + i + "=" + number * i);
    }
}
showMultiplicationTable(7);


for(var i = 0; i < 10; i++) {
    var random = Math.floor(Math.random() * 181) + 20;
    if( random % 2 === 0) {
        console.log(random + " is even!");
    } else {
        console.log(random + " is odd.")
    }
}

for(var i=1; i<=9; i++) {
    var duplicate = "";
    for (var o= 0; o < i; o++) {
        duplicate += i;
    }
    console.log(duplicate);
}