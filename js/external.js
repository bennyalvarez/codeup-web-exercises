"use strict"

//console.log("Hello from external JavaScript.");

//alert("Welcome to my website!");

//var userInput = prompt("What's your favorite color?");
//alert('Great, ' + userInput + ' is my favorite color too! ');

//var lMRentalInDays = parseFloat(prompt("How many days did you rent Little Mermaid?"));

//var bBRentalinDays = parseFloat(prompt("How many days did you rent Brother Bear?"));

//var hercRentalInDays = parseFloat(prompt("How many days did you rent Hercules?"));

//var rentalRate = 3

//var totalDue = (lMRentalInDays + bBRentalinDays + hercRentalInDays) * rentalRate;

//alert("your total is: $" + totalDue + " dollars.")

//var googleRate = parseFloat(prompt("How much is Google paying you per hour?"));

//var amazonRate = parseFloat(prompt("How much is Amazon paying you per hour?"));

//var fBRate = parseFloat(prompt("How much is Facebook paying you per hour?"));

//var googleHours = parseFloat(prompt("How many hours did you work at Google?"));

//var amazonHours = parseFloat(prompt("How many hours did you work at Amazon?"));

//var fBHours = parseFloat(prompt("How many hours did you work at Facebook?"));

//var totalPay = (googleHours * googleRate) + (amazonHours * amazonRate) + (fBHours * fBRate);

//alert("your total pay is: $" + totalPay + " dollars.")

var classHasRoom = confirm(“Hey, is there room in Fluker’s Intro to Mass Media class?”);
var noScheduleConflict = confirm(“Can you take a class at 8 AM?”);

alert(“You can has class: “ + (classHasRoom && noScheduleConflict));

alert("Can you register for this class? The answer is: " + canRegister);

var offerValid = prompt("Is the offer still valid?");
var boughtAtLeastTwo = prompt("Did you buy 2 or more items?");
var premiumMember = prompt("Are you a premium member?");
var canHasDiscount = (premiumMember || boughtAtLeastTwo) && offerValid;

alert("Can you have the discount? The answer is: " + canHasDiscount);

















