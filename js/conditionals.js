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

//function analyzeColor(input) {
//if (input === 'red') {
//        console.log("Roses are red.");
//    } else if (input === 'yellow') {
//        console.log("Yellow is sunny.");
//    } else if (input === 'orange') {
//        console.log("Oranges are orange.");
//   } else if (input === 'green') {
//       console.log("Green Grass of Georgia.");
//   } else if (input === 'blue') {
//       console.log("The sky is blue.");
//   } else if (input === 'indigo') {
//       console.log("Indigo girls.");
//   } else if (input === 'violet') {
//       console.log("Violet is pretty.");
//   } else {
//       console.log("I don't know anything about that color.");
//   }
//


function analyzeColor(color) {
    if (color === 'blue') {
        return "blue is the color of the sky";
    } else if (color === 'red') {
        return "Strawberries are red";
    } else if (color === 'cyan') {
        return "I don't know anything about cyan";
    } else {
        return "I don't know anything about " + color + ".";
    }
}
console.log(analyzeColor("red"));

//console.log(analyzeColor('blue'));
//console.log(analyzeColor('red'));
//console.log(analyzeColor('cyan'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor(color) {
    switch (color) {
        case "blue":
            return color + "is the color of the sky";
            break;
        case "red":
            return color + "Strawberries are " + color;
            break;
        case "cyan":
            return "I don't know anything about " + color;
            break;
        default:
            return "I don't know anything about " + color;
            break;
    }

    console.log(analyzeColor(randomColor));
    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */
    var yourColor = prompt("What is your favorite color?").toLowerCase();
    alert(analyzeColor(yourColor));


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



    function calculateTotal(luckyNum, totalAmount) {
        if (luckyNum === 5) {
            return (totalAmount - (totalAmount * 1));
        } else if (luckyNum === 4) {
            return (totalAmount - (totalAmount * .50));
        } else if (luckyNum === 3) {
            return (totalAmount - (totalAmount * .35));
        } else if (luckyNum === 2) {
            return (totalAmount - (totalAmount * .25));
        } else if (luckyNum === 1) {
            return (totalAmount - (totalAmount * .10));
        } else if (luckyNum === 0) {
            return (totalAmount - (totalAmount * 0));
        }
    }

    console.log(calculateTotal(1, 12));
    console.log(calculateTotal(2, 12));
    console.log(calculateTotal(3, 12));
    console.log(calculateTotal(4, 12));
    console.log(calculateTotal(5, 12));
    console.log(calculateTotal(0, 12));
    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
    var luckyNumber = Math.floor(Math.random() * 6);
    var totalBill = parseFloat(prompt("How much was your bill?"));
    alert("Your lucky number is " + luckyNumber + ". Your original price before the discount was " + totalBill +
        ". Your total bill after discount comes out to $" + calculateTotal(luckyNumber, totalBill).toFixed(2));

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
        if (isNaN(userAnswer)) {
            alert(userAnswer + " is not a number, sorry.")
        }
        if (number % 2 == 0) {
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
        alert(AddHundred + "is your number plus a hundred.");

    } else {
        alert("Fine then, bye!");
    }


    var numberEntry;

    function isOddorEven(numberEntry) {
        return (numberEntry % 2 === 0) ? "This number is even." : "This number is odd.";
    }

    function isNegativeOrPositive(numberEntry) {
        return (numberEntry > 0) ? "This number is positive." : "This number is negative.";
    }

    function plus100(numberEntry) {
        return "Your number is " + (parseFloat(numberEntry)) + 100 + " if we added 100."
    }

    if (participate) {
        numberEntry = prompt("Please enter a number.")
        if (isNaN(numberEntry)) {
            alert("Sorry, what you entered is not a number.");
        } else {
            alert(isOddorEven(numberEntry));
            alert(isNegativeOrPositive(numberEntry));
            alert(plus100(numberEntry));
        }
    } else {
        alert("Fine, bye!")
    }
}

