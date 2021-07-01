(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ['Beejay','Lieyette','Dodge','Kathleen'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(var i = 0; i < names.length; i++) {
        console.log("The name at " + i + "is" + names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name) {
        console.log("here is a name " + name)

    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    /*var digits = [1, 2, 3, 4, 5];*/

    function first(digits) {
        return digits[0];
    }
    console.log(first([1, 2, 3, 4, 5]));

    function second(digits) {
        return digits[1];
    }
    console.log("The 2nd item in digits is " + second([1,4,3]));

    function last(digits) {
        return digits[digits.length -1];
    }
    console.log(last([1,2,3,4,5]));

    var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus','Neptune'];

    for(var i = 0; i < planets.length; i++) {
        console.log(" the planet is " + planets[i]);
    }

    planets.push('Pluto');
    console.log(planets);

    planets.unshift('The Sun');
    console.log(planets);

    var todoList = [ 'cook', 'clean', 'homework', 'pay bills']
    console.log("my todo list");
    console.log(todoList);
    var removedItem = todoList.pop();
    console.log('Task complete: ' + removedItem);
    console.log(todoList);
    var doneItem = todoList.shift();
    console.log( "First item completed: " + doneItem);
    console.log(todoList);

    console.log(todoList.indexOf('homework'));
    console.log(todoList.lastIndexOf('clean'));

    planets.sort();
    console.log(planets);

    var instruments = "ukulele, bass, organ, cello, harmonica";
    console.log(instruments);

    var instrumentArray = instruments.split(',');
    console.log(instrumentArray);

    var instrumentString = instrumentArray.join(',');
    console.log(instrumentString);

})();
