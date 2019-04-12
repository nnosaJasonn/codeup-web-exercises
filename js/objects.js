(function() {
    "use strict";

    /**
     * TODO: X
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Jason",
        lastName: "Lindsey",
    };

    console.log(person);

    person.sayHello =  function(){return 'Hello, from ' + person.firstName + ' ' + person.lastName + '!'}

    console.log(person.sayHello());



    /**
     * TODO: X
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO: X
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
         {
             name: 'Cameron',
             amount: 180
         },
         {
             name: 'Ryan',
             amount: 250
         },
         {
             name: 'George',
             amount: 320
         }
     ];
    shoppers.forEach(function(shopper) {
       var discount = shopper.amount * .12;
       if (shopper.amount >= 200) {
           console.log(shopper.name + ' has spent more than $200 so he will receive a 12% discount! His total is now $' + (shopper.amount - discount).toFixed(2))
       } else {
           console.log(shopper.name + ' owes $' + shopper.amount.toFixed(2))
       }
    });
    /** TODO: X
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
        {
            title: 'Tractatus Logico-Philosophicus',
            author: {
                firstName: 'Ludwig',
                lastName: 'Wittgenstein'
            }
        },
        {
            title: 'Being as Communion',
            author: {
                firstName: 'John',
                lastName: 'Zizioulas'
            }
        },
        {
            title: 'Sirens of Titan',
            author: {
                firstName: 'Kurt',
                lastName: "Vonnegut"
            }
        },
        {
            title: 'Skeleton and Ghost',
            author: {
                firstName: 'Nathaniel',
                lastName: 'Dowell'
            }
        },
        {
            title: 'Lost in the Cosmos',
            author: {
                firstName: 'Percy',
                lastName: 'Walker'
            }
        }
    ];

    console.log(books);


    books.forEach(function(book, index) {
        console.log('Book number ' + (index + 1));
        console.log('Title: ' + book.title);
        console.log('Author: ' + book.author.firstName + ' ' + book.author.lastName);
    });


    /**
     * TODO: X
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

    function createBook(title, author) {
        var authorNames = author.split(' ');
        var newTitle = {
            title: title,
            author: {
                firstName: authorNames[0],
                lastName: authorNames[1]
            }
        }; books.push(newTitle);
    }

    createBook('Social Contract', 'John Locke');

    createBook('A Treatise On Human Nature', 'David Hume');

    createBook('After Virtue', 'Alasdair MacIntyre');




    function showBookInfo(array) {
        array.forEach(function(element, index) {
           console.log('Book number ' + (index + 1));
            console.log('Title: ' + element.title);
            console.log('Author: ' + element.author.firstName + ' ' + element.author.lastName);
        });
    }

    showBookInfo(books);



})();
