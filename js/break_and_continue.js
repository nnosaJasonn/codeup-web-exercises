"use strict";



    var input = '';

    while (input < 1 || input > 50 || input % 2 == 0) {
        input = prompt('please enter an odd number between 1 and 50')
    }
    console.log('the number to skip is: ' + input);



     do {
         input = prompt('please enter an odd number between 1 and 50')
     } while(input<1 || input>50 || input % 2 == 0);

    console.log('the number to skip is: ' + input);


    for (var i = 1; i < 50; i++) {
        if (i % 2 === 0) {
            continue;
        } else if (i == input) {
            console.log('Yikes! skipping number: ' + i);
        } else {
            console.log('Here is an odd number: ' + i);
        }
    }



