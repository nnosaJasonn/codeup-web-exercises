"use strict";


var i = 2;
while (i <= 65536) {
    console.log(i);
    i *=2
}

var allCones = Math.floor(Math.random() * 50) + 50;
var conesBought = Math.floor(Math.random() * 5) + 1;
function coneOrder () {
    conesBought = Math.floor(Math.random() * 5) + 1;
    console.log(conesBought);
}

do {

    allCones -= conesBought;
    coneOrder();
    if (conesBought <= allCones) {
        console.log(conesBought + " cones of ice cream sold!");
    } else if (allCones === 0) {
        console.log('hooray, I sold all of the ice cream cones!')
        break;
    } else if (conesBought > allCones) {
        console.log('I cannot sell you ' + conesBought + ' cones, I only have ' + allCones + ' left');
        coneOrder();
        if (conesBought > allCones) {
            coneOrder();
        } else if (conesBought === allCones) {
            console.log('hooray, I have sold all of the ice cream cones!');
            break;
        }
    }
} while (allCones >= conesBought);