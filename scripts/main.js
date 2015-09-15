'use strict';

// targets
var $redTab = $('#red-tab');
var $greenTab = $('#green-tab');
var $blueTab = $('#blue-tab');

var $redContent = $('#red-content');
var $greenContent = $('#green-content');
var $blueContent = $('#blue-content');


// functions
function showRed() {
    $greenContent.hide();
    $blueContent.hide();
    $redContent.show();

    $greenTab.css({backgroundColor: '#eee'});
    $blueTab.css({backgroundColor: '#eee'});
    $redTab.css({backgroundColor: '#FE3101'});
}

function showGreen() {
    $redContent.hide();
    $blueContent.hide();
    $greenContent.show();

    $redTab.css({backgroundColor: '#eee'});
    $blueTab.css({backgroundColor: '#eee'});
    $greenTab.css({backgroundColor: '#03F667'});
}

function showBlue() {
    $redContent.hide();
    $greenContent.hide();
    $blueContent.show();

    $redTab.css({backgroundColor: '#eee'});
    $greenTab.css({backgroundColor: '#eee'});
    $blueTab.css({backgroundColor: '#56ABFB'});
}

// events
$redTab.on('click', showRed);
$greenTab.on('click', showGreen);
$blueTab.on('click', showBlue);
