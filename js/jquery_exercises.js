/*Intro exercise*/

/*$(document).ready(function(){
    alert('theDOM has finished loading!')
});*/

/*selectors exercise*/

var contents = $('#nonagon').html();
alert(contents);

alert($('#bedderheader').html());

var h1Alert = $('h1').html();
alert(h1Alert);

$('#h4Container').append('<h4>Beware The Jabberwock</h4>');
$('h4').click(function(){
   $(this).append('<ol><li>The jaws that bite</li><li>the claws that catch</li></ol>')
});

$('#beeboo').html('How to open the door:');

$('.codeup').css('border', '1px solid red');

$('li').css('font-size', '20px');

$('h1, p, li').css('background', 'yellow');

/*mouse events exercise*/
/*

$('h1').click(function(){
   $(this).css('background-color', 'OliveDrab')
});

$('p').dblclick(function(){
   $(this).css('font-size', '18px')
});

$('li').hover(function(){
    $(this).css('color', 'red');
},
function(){
    $(this).css('color', 'black');
});*/
