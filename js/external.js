"use strict";

var x = 34;

console.log(x);

var change = function () {
    x -= 3;
    return x;
};

change();

console.log(x);
change();
console.log(x);
change();
console.log(x);



console.log('Hello from external JavaScript');
alert("Welcome to my Website!");

var favColor = prompt('What is your favorite color?');

alert('Great, ' + favColor + ' is my favorite color too!');



var mermaid = prompt('How many days do you want The Little Mermaid?');
var bear = prompt('How many days do you want to rent Brother Bear');
var hercules = prompt('How many days do you want to rent Hercules?');
var pricePerDay = prompt('What is the cost per day?');
var totalCost = (+mermaid + +bear + +hercules) * +pricePerDay;

alert('The total cost for your rentals will be $' + totalCost + '!');

var googleHours = prompt('How many hours did you work at Google?');
var amazonHours = prompt('How many hours did you work at Amazon?');
var facebookHours = prompt('How many hours did you work at Facebook?')
var google = prompt('What was your rate of pay for Google?');
var amazon = prompt('What was your rate of pay for Amazon?');
var facebook = prompt('What was your rate of pay for Facebook?');
var totalPay = google * googleHours;
totalPay += amazon * amazonHours;
totalPay += facebook * facebookHours;


alert('For ' + googleHours + ' hours at Google, ' + amazonHours + ' hours at Amazon, and ' + facebookHours + ' at Facebook, your total pay will be: $' + totalPay + '!');




var isFull = confirm('Is the class full? Click ok if the class is full.');
var conflict = confirm('Is there a scheduling conflict? Click ok if so.');
var canEnroll = !(isFull || conflict);

if (canEnroll) {
    alert('You are free to enroll in this class')
} else if (conflict && isFull) {
    alert('You cannot enroll in this class because the class is full and you have a scheduling conflict!')
} else if (conflict && !isFull) {
    alert('You cannot enroll in this class because you have a scheduling conflict!')
} else if (!conflict && isFull) {
    alert('You cannot enroll in this class because the class is full!')
}




var twoItemsBought = prompt('How many items have you purchased?');
if (twoItemsBought >= 2) {
    twoItemsBought = true;
} else {
    twoItemsBought = false;
}

var isExpired = confirm('Is the offer Expired?');
var premium = confirm('Do you have a premium membership?');


var offerAvailable =  !isExpired && (twoItemsBought || premium);

alert('Offer availability status is ' + offerAvailable);
