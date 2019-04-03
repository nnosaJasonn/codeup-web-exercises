"use strict";


console.log('Hello from external JavaScript');
alert("Welcome to my Website!");

var favColor = prompt('What is your favorite color?');

alert('Great, ' + favColor + ' is my favorite color too!');



var mermaid = 3;
var bear = 5;
var hercules = 1;
var pricePerDay = 3;
var totalCost = (mermaid + bear + hercules) * pricePerDay;

alert('The total cost for your rentals will be $' + totalCost + '!');

var googleHours = prompt('How many hours did you work at Google?');
var amazonHours = prompt('How many hours did you work at Amazon?');
var facebookHours = prompt('How many hours did you work at Facebook?')
var google = 400 * googleHours;
var amazon = 380 * amazonHours;
var facebook = 350 * facebookHours;


alert('For ' + googleHours + ' hours at Google, ' + amazonHours + ' hours at Amazon, and ' + facebookHours + ' at Facebook, your total pay will be: $' + (google + amazon + facebook) + '!');



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

var isExpired = false;
var premium = prompt('Do you have a premium membership?');
if (premium === 'yes' || "Yes") {
    premium = true;
} else {
    premium = false;
}

var offerAvailable =  !isExpired && (twoItemsBought || premium);

if (offerAvailable) {
    alert('Good news, the offer is available!')
} else {
    alert('Sorry, this offer is not currently available')
}
