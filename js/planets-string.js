(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|');

    /**
     * TODO: X
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    var planetStringBr = planetsArray.join(' <br> ');

    console.log(planetStringBr);

    var planetStringLi = ' <ul> ' + ' <li>' + planetsArray.join('</li> <li>') + '</li> </ul> ';

    console.log(planetStringLi);

    function makePlanetList() {
        var list = document.createElement("UL");
        list.setAttribute("id", "planets");
        document.body.appendChild(list);

        for(var i=0; i<planetsArray.length; i++) {

            var listItem = document.createElement("LI");
            var listText = document.createTextNode(planetsArray[i]);
            listItem.appendChild(listText);
            document.getElementById("planets").appendChild(listItem);
        }
    }

    makePlanetList();


    /**
     * TODO: X
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

})();
