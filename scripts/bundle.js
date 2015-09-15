(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

    $greenTab.css({ backgroundColor: '#eee' });
    $blueTab.css({ backgroundColor: '#eee' });
    $redTab.css({ backgroundColor: '#FE3101' });
}

function showGreen() {
    $redContent.hide();
    $blueContent.hide();
    $greenContent.show();

    $redTab.css({ backgroundColor: '#eee' });
    $blueTab.css({ backgroundColor: '#eee' });
    $greenTab.css({ backgroundColor: '#03F667' });
}

function showBlue() {
    $redContent.hide();
    $greenContent.hide();
    $blueContent.show();

    $redTab.css({ backgroundColor: '#eee' });
    $greenTab.css({ backgroundColor: '#eee' });
    $blueTab.css({ backgroundColor: '#56ABFB' });
}

// events
$redTab.on('click', showRed);
$greenTab.on('click', showGreen);
$blueTab.on('click', showBlue);

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map