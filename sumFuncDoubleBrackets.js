'use strict';

function sumF(a) {
	let sum =+ a;

	return function (b){
		return sum + b;
	};
}

alert(sumF(1)(2));
alert(sumF(5)(-1));