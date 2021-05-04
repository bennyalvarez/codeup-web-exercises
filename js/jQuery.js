"use strict";

$('#intro').click(function() {
    $(this).css('background-color', '#FF0');
});

$('p').dblclick(function() {
    $(p).css('font-size', '18px');;
});

$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', '#000');
    }
);