(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var area = Math.pow(circle.radius, 2) * Math.PI;

            return area
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            if (doRounding ===true) {
                var roundArea = Math.round(circle.getArea());

                // If doRounding is true, round the result to the nearest integer.
                // Otherwise, output the complete value

                console.log("Area of a circle with radius: " + this.radius + ", is: " + roundArea + ' when rounded to the nearest whole number');
            } else {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.getArea());

            }
        }
    };

        // log info about the circle
        console.log("Raw circle information");
    circle.logInfo(false);

    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
