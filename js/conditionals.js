"use strict";



/**
 * TODO: X
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
 */





(function userNumber() {
    var proceed = confirm('Would you like to enter a number?');


    if (proceed) {
        var number = parseInt(prompt('Please enter a number'));
        var numberAdd = 100 + number;
        if (isNaN(number)){
            alert("that's not a number!")
        } else {

            if (number % 2 === 0) {
                alert('That number is even!');
                alert(number + " + 100 equals " + numberAdd);
                if (Math.sign(number) === -1) {
                    alert(number + " is negative");
                } else {
                    alert(number + " is positive!")
                }

            } else {
                alert('That number is odd!');
                alert(number + " + 100 equals " + numberAdd);
                if (Math.sign(number) === -1) {
                    alert(number + " is negative");
                } else {
                    alert(number + " is positive!")
                }
            }
        }
    } else if (!proceed) {
        alert("Fine! I didn't want to do any tricks for you anyway!");
    }
})();


/* ########################################################################## */

/**
 * TODO: X
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
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



function analyzeColor(color) {


    if (color === 'red') {
        return 'Red is the color of my face when I demo'
    } else if (color === 'orange') {
        return 'Orange is the color Ralphie turns when he eats too much beta carotene'
    } else if (color === 'yellow') {
        return 'My yellow in this case is not so mellow!'
    } else if (color === 'green') {
        return 'Green is not the color of my thumb'
    } else if (color === 'blue') {
        return 'Blue is the color of my suede shoes'
    } else if (color === 'indigo') {
        return 'Oliver Sacks yelled "I want to see indigo now—now!"'
    } else if (color === 'violet') {
        return 'violet is just a fancy way to say purple'
    } else {
        return 'idk anything about that color... pick a normal one next time'
    }
}










// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
console.log(analyzeColor(randomColor));

console.log(analyzeColor('red'));

switch (randomColor) {
    case "red" :
        console.log('Red is the color of my face when I demo');
        break;
    case "orange" :
        console.log('Orange is the color Ralphie turns when he eats too much beta carotene')
        break;
    case "yellow":
        console.log('My yellow in this case is not so mellow!');
        break;
    case "green":
        console.log('Green is not the color of my thumb');
        break;
    case "blue":
        console.log('Blue is the color of my suede shoes');
        break;
    case 'indigo':
        console.log('Oliver Sacks yelled "I want to see indigo now—now!"');
        break;
    case "violet":
        console.log('violet is just a fancy way to say purple');
        break;
    default:
        console.log("idk anything about that color");
        break;
}

/**
 * TODO:X
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO: X
 * Refactor your above function to use a switch-case statement
 */

var colorInput = prompt('enter a color');
alert(analyzeColor(colorInput.toLowerCase().trim()));

/**
 * TODO: X
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

function calculateTotal(number, total) {
    if (number === 0) {
        alert('Sorry, no discount today... your total is $' + cost)
    }  else if (number === 1) {
        alert('Your discount is 10%! that brings your total to $' + (cost - (cost * .1)));
    } else if (number === 2) {
        alert('Your discount is 25%! that brings your total to $' + (cost - (cost * .25)));
    } else if (number === 3) {
        alert('Your discount is 35%! that brings your total to $' + (cost - (cost * .35)));
    } else if (number === 4) {
        alert('Your discount is 50%! that brings your total to $' + (cost - (cost * .5)));
    } else if (number === 5) {
        alert('Your discount is 100%! that brings your total to $' + (cost - (cost * 1)));
    } else {
        alert('You have cheated! ' + number + ' is not one of the possible lucky numbers!')
    }
}
/*var luckyNumber = Math.floor(Math.random() * 6);*/


calculateTotal(7, 50);



/**
 * TODO: X
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

/**
 * TODO: X
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

var cost = 100;
var luckyNumber = Math.floor(Math.random() * 6);
calculateTotal(luckyNumber, cost);

