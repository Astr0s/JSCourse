"use strict";

Object.prototype.defer = function(timer) {
  var f = this;
  return function() {
    var args = arguments,
      context = this;
    setTimeout(function() {
      f.apply(context, args);
    }, ms);
  }
};

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

//Zadacha
//http://learn.javascript.ru/native-prototypes#dobavit-funktsiyam-defer-s-argumentami