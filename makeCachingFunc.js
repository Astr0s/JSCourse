"use strict";

function f(x) {
  return Math.random() * x; // random для удобства тестирования
}


function makeCaching(f) { 
	let obj = {};

	return function() {	
		if (!obj[arguments[0]]) { 
		obj[arguments[0]] = f.apply(this, arguments);
		return obj[arguments[0]];
		}
		
		else {
		return obj[arguments[0]];
		}
	};	
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);

console.log( a == b ); // true (значение закешировано)

b = f(2);
console.log( a == b ); // false, другой аргумент => другое значение


//Zadacha
//http://learn.javascript.ru/decorators#keshiruyuschiy-dekorator