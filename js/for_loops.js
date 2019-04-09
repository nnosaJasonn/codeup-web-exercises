function showMultiplicationTable(num) {
    for(var i = 1; i <= 10; i++){
        console.log(num + " x " + i + " = " + (num * i));
    }
}

showMultiplicationTable(2);
showMultiplicationTable(10);



for(var i = 1; i<=10; i++) {
    var randNum = Math.floor((Math.random()*10) + 1);
    if (randNum%2===0) {
        console.log(randNum + " is even");
    } else {
        console.log(randNum + ' is odd');
    }
}

var j = "";
for(var i = 1; i<10; i++) {
    j = j + '1';
    console.log(j * i);
}

/* */


for (var i = 100; i>=5; i-=5){
    console.log(i)
}

