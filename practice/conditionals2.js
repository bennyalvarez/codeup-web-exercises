"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(input) {
    if (input === 'blue') {
        return "blue is the color of the sky";
    } else if (input === 'red') {
        return "Strawberries are red";
    } else if (input === 'cyan') {
        return "I don't know anything about cyan";
    } else {
        return "I don't know anything about that color.";
    }
}

console.log(analyzeColor('red'));
console.log(analyzeColor('cyan'));
console.log(analyzeColor('blue'));

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

    var userColor = prompt("What is your favorite color?");

    switch (userColor.toLowerCase()) {
        case "blue":
            console.log(userColor + " is the color of the sky");
            break;
        case "red":
            console.log("Strawberries are " + userColor);
            break;
        case "cyan":
            console.log("I don't know anything about cyan");
            break;
        default:
            console.log("I don't know anything about " + userColor);
            break;
    }


    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */
    var yourColor = prompt("Please choose a color.").toLowerCase()
    console.log(analyzeColor(yourColor));

    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */
     function calculateTotal(luckyNumber,totalAmount) {
        if (luckyNumber === 5) {
            return parseFloat(totalAmount * 0).toFixed(2);
        } else if (luckyNumber === 4) {
            return parseFloat(totalAmount * .50).toFixed(2);
        } else if (luckyNumber === 3) {
            return parseFloat(totalAmount * .35).toFixed(2);
        } else if (luckyNumber === 2) {
            return parseFloat(totalAmount * .25).toFixed(2);
        } else if (luckyNumber === 1) {
            return parseFloat(totalAmount * .10).toFixed(2);
        } else if (luckyNumber === 0) {
            return parseFloat(totalAmount * 1).toFixed(2);
        }
    }
    console.log(calculateTotal(5,100));
    console.log(calculateTotal(4,100));
    console.log(calculateTotal(3,100));
    console.log(calculateTotal(2,100));
    console.log(calculateTotal(1,100));
    console.log(calculateTotal(0,100));
    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
  var luckyNumber = Math.floor(Math.random() * 6);

  var totalBill = parseFloat(prompt("What is your total bill?")).toFixed(2);
  alert("Your lucky number is " + luckyNumber + ". That means your new price is $" + (totalBill-calculateTotal(luckyNumber,totalBill)) + ".");


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


var UserAnswer = confirm("Would you like to enter a number?");
if (UserAnswer === true) {
    var number = parseFloat(prompt("Please enter a number."));
    if (isNaN(UserAnswer)) {
        alert(UserAnswer + " is not a number, sorry.")
    }
    if (number % 2 === 0) {
        alert("The number is even.");
    } else {
        alert("The number is odd.");
    }
    if (number > 0) {
        alert("The number is positive.");
    } else {
        alert("The number is negative.");
    }
    var AddHundred = number + 100
    alert(AddHundred + " is your number plus a hundred.");

} else {
    alert("Fine then, bye!");
}



