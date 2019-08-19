"use strict";

Object.prototype.defer = function(timer) {
	return setTimeout(this, timer);
};

function f() {
  alert( "привет" );
}

f.defer(1000); // выведет "привет" через 1 секунду

//Zadacha
//http://learn.javascript.ru/native-prototypes#dobavit-funktsiyam-defer