"use strict";

function f(x) {
	console.log(x);
}

function delay(f, time) {
	return function (...args) {
		return setTimeout(f, time, ...args);
	};
}

var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд

//Zadacha
//http://learn.javascript.ru/settimeout-setinterval#funktsiya-zaderzhka