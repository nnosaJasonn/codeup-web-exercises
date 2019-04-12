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

    /* person and sayHello()*/

    var person = {
        firstName: "Jason",
        lastName: "Lindsey"
    };

    console.log(person);

    person.sayHello = function () {
        return 'Hello, from ' + person.firstName + ' ' + person.lastName + '!'
    };

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


    /* HEB discount */
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
    shoppers.forEach(function (shopper) {
        console.log(shopperInfo(shopper));
    });

    function shopperInfo(shopper) {
        var discount = shopper.amount * .12;
    if (shopper.amount >= 200) {
        return shopper.name + ' has spent $' + shopper.amount + ' which is more than $200 so he will receive a 12% discount! His total is now $' + (shopper.amount - discount).toFixed(2)
    } else {
        return shopper.name + ' owes $' + shopper.amount.toFixed(2) + ' if ' + shopper.name + ' spends $' + (200 - shopper.amount) + ' more, ' + shopper.name + ' will recieve a 12% discount!'
    }
}

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

    /* books object/array*/
    var books = [
        {
            title: 'Skeleton and Ghost',
            author: {
                firstName: 'Nathaniel',
                lastName: 'Dowell'
            }
        },
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
            title: 'Lost in the Cosmos',
            author: {
                firstName: 'Percy',
                lastName: 'Walker'
            }
        }
    ];



/*
    books.forEach(function(book, index) {
        console.log('Book # ' + (index + 1) + "'");
        console.log('Title: ' + book.title);
        console.log('Author: ' + book.author.firstName + ' ' + book.author.lastName);
        console.log('---------')
    });*/


    /**
     * TODO: X
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
a     *
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



    /* books refactored */

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

    createBook('Either/Or', 'Søren Kierkegaard ');

    createBook('After Virtue', 'Alasdair MacIntyre');

    /*Bonus 1*/

    books.forEach(function(element){
        element.keywords= [],
            element.isAvailable = true,
            element.dateAvailable = '',
            element.lend = function(){
                if (element.isAvailable === true) {
                    element.dateAvailable = new Date(Date.now() + 12096e5);
                    element.isAvailable = false;
                }
            },
            element.receive = function(){
                element.available = true;
                element.dateAvailable = new Date()
            }
    });

    /*Bonus 1*/




    function showBookInfo(array) {
        array.forEach(function(element, index) {
           console.log('Book # ' + (index + 1) + ':');
            console.log('Title: ' + element.title);
            console.log('Author: ' + element.author.firstName + ' ' + element.author.lastName);
            console.log('--------------')
        });
    }

    showBookInfo(books);

    /* mini exercise number One */

    var beverages = [];

    function addBeverage(brand, type, volume, cost, expiration, open) {
        var newBeverage = {
            brandName: brand,
            type: type,
            volumeInLiters: volume,
            priceInCents: cost,
            expirationDate: expiration,
            isOpen: open

        }; beverages.push(newBeverage)
    }


    addBeverage('Iced Coffee', 'Coffee', .5, 250, new Date(), true)

    console.log(beverages[0]);

    /* mini exercise two */

    var users = [
        {
            name: "Sam",
            age: 21
        },
        {
            name: "Cathy",
            age: 34
        },
        {
            name: "Karen",
            age: 43
        }
    ];

    function nameAndAgeChange(arr) {
        var nameString = '';
        arr.forEach(function(element) {
            nameString += element.name + ' ';

        }); console.log(nameString);

        arr.forEach(function(element){
            var previousAge = element.age;
           element.name = 'John Doe';
           element.age += 1;
            console.log(element.name + "'s age was " + previousAge + ' but now ' + element.name + " is " + element.age);
        });
    }

    nameAndAgeChange(users);

    /* mini exercise 3-dogs*/

    var dogs = [];

    function newDog(breed, weight, age, color, sterilized, shot, shotDate) {
        var newDog = {
            breed: breed,
            weightInPounds: weight,
            age: age,
            color: color,
            sterilized: sterilized,
            shotRecords: [
                {
                    typeOfShot: shot,
                    date: shotDate
                }
            ],
            bark: function(){return 'Woof!';},
            getOlder: function(){return newDog.age +=1},
            fix: function(){if (sterilized === false)
            {return newDog.sterilized = true;}else{return newDog.sterilized = true;}
            },
            vaccinate: function(name){
                var newShot = {
                    typeOfShot: name,
                    date: new Date()
                };
                if (newDog.shotRecords[0].typeOfShot !== undefined){
                    newDog.shotRecords.push(newShot)
                } else{newDog.shotRecords[0] = newShot}
                return newShot
            }
        };
        dogs.push(newDog)
    }

    newDog('chihuahua', 50, 50, 'red', false, 'Canine DA2PPC', 'January 1979')
    dogs[0].vaccinate('rabies');
    dogs[0].fix();
    console.log(dogs[0].sterilized);

    newDog('hound', 3, 'grey', false);
    console.log(dogs[1]);
    console.log(dogs[1].shotRecords);

    dogs[1].vaccinate('rabies');
    dogs[1].vaccinate('pcp');
    console.log(dogs[1].shotRecords);

    /*Bonus 1: line 195 */




})();


/*        {
            breed: 'chihuahua',
            weightInPounds: 50,
            age: 5,
            color: 'blue',
            sterilized: true,
            shotRecords: [
                {
                    shot: 'Canine DA2PPC',
                    shotDate: 'January 1979'
                },
                {
                    shot: 'rabies',
                    shotDate: 'February 1878'
                }
            ],
            bark: function(){console.log('Woof')},
            getOlder: function(){dogs.age += 1},
            fix: function() {dogs.sterilized = !dogs.sterilized},
            vaccinate: function(name){
                var newShot = {
                    shot: name,
                    shotDate: new Date()
                },
                dogs[0].shotRecords.push(newShot)
            }
        }


        */