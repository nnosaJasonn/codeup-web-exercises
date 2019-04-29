"use strict";


function showMultiplicationTable(num) {
    for(var i = 1; i <= 10; i++){
        console.log(num + " x " + i + " = " + (num * i));
    }
}
/*

function outputRow (a, b) {
    var output = '';
    var total = a * b;
    output += a + 'x' + b + ' = ' + total;
    return output;
}

function showMultiplicationTable2 (num) {
    var output = '';
    for (var j=1; j<=10; j++){
        output += outputRow(num, j) + '\n'
    }
    return output;
}

console.log(showMultiplicationTable2(7));
*/

function addToArray(x) {
    var output = []

    for(var i =0; i<x; i++) {
        output.push('t');
        output.push('f');
        for(var j=0; j<i - 1; j++){
            output.push('t');
            output.push('f');
        }
    }

    console.log(output);
}
/*

showMultiplicationTable(2);
showMultiplicationTable(47);

function randNum(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min)
}


for (var i =1; i<10; i++) {
    var output = '';
    for (var j=0; j < i; j++){
        output += i
    }
    console.log(output);
}


for(var i = 1; i<=10; i++) {
    var num = randNum(20, 200);
    if (num%2===0) {
        console.log(num + " is even");
    } else {
        console.log(num + ' is odd');
    }
}

var j = "";
for(var i = 1; i<10; i++) {
    j = j + '1';
    console.log(j * i);
}

for(var i = 1; i<10; i++) {
    console.log(String(i).repeat(i));
}



for (var i = 100; i>=5; i-=5){
    console.log(i)
}


*/
