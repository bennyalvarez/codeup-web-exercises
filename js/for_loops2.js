"use strict";

//function showMultiplicationTable(num) {
//    for (var i = 0; i > 10; i++) {
//        return num * i;
//    }
//    console.log(showMultiplicationTable(7));
//}

function showMultiplicationTable(number) {
    for(var multiplier = 1; multiplier <= 10; multiplier++) {
        console.log(number + " * " + multiplier + " = " + number * multiplier);
    }
}
showMultiplicationTable(7);