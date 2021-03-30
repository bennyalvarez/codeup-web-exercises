"use strict";
//my attempt
//var numbertoStop = 50;
//var userOdd = prompt("Please enter an odd number between 1 and 50.");

//for (var i = 1; i < 100; i++) {
//    if (userOdd % 2 !== 1) {
//        alert("Your number is not odd. Please try again.");
//        break;
//    } else if (userOdd % 2 === 1) {
//        continue;
//    }
//}
//    console.log('Here is an odd number: ' + i);

//javier's version

var oddNumber = 0;

while (oddNumber !== "You're never gonna come up with this."){
    oddNumber = parseFloat(prompt("Please enter an odd number between 1 and 50."));
    if (oddNumber % 2 === 1 || (oddNumber > 0 && oddNumber < 50)) {break;}
}
//while (oddNumber % 2 !== 1 || oddNumber < 1 || oddNumber > 50) {
//    oddNumber = parseFloat(prompt("Please enter an odd number between 1 and 50."));
//    if (oddNumber % 2 === 1){break;}
//}
for (var i =1; i < 50; i + 2) {
    if (i === oddNumber) {
        console.log("Yikes! Skipping number" + oddNumber);
    }
    console.log(i);
}





//austin's version

//if(userInput % 2 !== 0){
//    if(userInput > 0 && userInput < 50){
//        alert("That sure is an odd number between 1-50! \r\n\ Please check the console log for all further output.")
//        break;
//    }else{
//        alert("Please enter a valid number.");
//    }

//}else{
//    alert("Please enter a valid number.");
//}