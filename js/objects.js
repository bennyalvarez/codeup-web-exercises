(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstName: "Rick",
        lastName: "Sanchez"
    };
    console.log(person.firstName)
    console.log(person.lastName)

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        return ("Hello from " + person.firstName + " " + person.lastName + "!");
    };
    console.log(person.sayHello())


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function discountApply(x) {
        var minSpend = 200;
        var discAmount = .12;
        shoppers.forEach(function (duck, i) {
            if (x[i].amount > minSpend) {
                console.log(x[i].name + " you spent $" + (x[i].amount).toFixed(2) + " and earned a discount of $" + (x[i].amount * discAmount).toFixed(2) + ". Your total owed is $" + (x[i].amount - (x[i].amount * discAmount)).toFixed(2));
            } else {
                console.log(x[i].name + " you spent $" + (x[i].amount).toFixed(2) + ". Which brings you $" + ((x[i].amount - minSpend) * -1).toFixed(2) + " short of a discount. The total you owe is $" + (x[i].amount).toFixed(2));
            }
        })
    }

    discountApply(shoppers);


    //javier's version

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (shopper) {
        //shopper singular will the object
        var shopperName = shopper.name;
        var amountSpent = "$" + shopper.amount.toFixed(2);
        var discount = 0;
        if (shopper.amount > 200) {
            discount = shopper.amount * .12;
        }
        var amountAfterDiscount = shopper.amount - discount;
        discount = "$" + discount.toFixed(2);
        var message = shopperName + " spent " + amountSpent +
            amountSpent + ". Ther discount is " + discount + ". The amount after discount is "
            + amountAfterDiscount.toFixed(2);
        console.log(message);


});






    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {title: "Rich Dad Poor Dad", author: {firstName: "Robert", lastName: "Kiosaki"}},
        {title: "The Richest Man in Babylon", author: {firstName: "George Samuel", lastName: "Clason"}},
        {title: "Lord of the Rings", author: {firstName: "J.R.R", lastName: "Tolkien"}},

    ];

    //javier's version

    var books = [
        {
            title: "Mexican Gothic",
            author: {
                firstName: "Sylvia",
                lastName: "Moreno-Garcia"
            }
        },
        {
            title: "All Systems Red",
            author: {
                firstName: "Martha",
                lastName: "Wells"
            }
        },
        {
            title: "La Red Purpura",
            author: {
                firstName: "Carmen",
                lastName: "Mola"
         }
        }
    ];

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach(function(book, index) {
        var bookNumber = index + 1;
        console.log("Book # " + bookNumber);
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " +
        book.author.lastName)
    });

    //david culver's version

    books.forEach(function (book) {
        console.log("Book # " + (books.indexOf(book) + 1) + "\nTitle: " + book.title + "\nAuthor: " + book.author.firstName + " " + book.author.lastName);
    })

    //joseph's version

    for(var i=0; i<books.length; i++)
    {
        console.log("Book # " + parseInt(i+1));
        console.log("Title: " + books[i].name);
        console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName)
        console.log("---");
    }
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    //javier's version

    function createBook(title, author) {
        var nameArray = author.split(" ");
        var firstName = nameArray[0];
        var lastName = nameArray[1];
        return {
            title: title,
            author: {
                firstName: firstName,
                lastName: lastName
            }
        }
    }

    books.push(createBook("Storm of Locusts", "Rebecca Roanhorse"));

        for (var i = 0; i < books.length; i++){
            var bookNumber = 1+ 1;
            console.log("Book # " + bookNumber);
            console.log("Title: " + books[i].title);
            console.log("Author: " + books[i].author.firstName + " "
            + books[i].author.lastName);
        }



    //var booksWithFunction = [];


    //Matthew's version

    function createBook(title, authorFirstName, authorLastName) {
        return {
            title: title,
            author: {
                firstName: authorFirstName,
                lastName: authorLastName
            }
        };
    }


})();

//completed exercise
//console.log