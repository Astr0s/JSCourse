'use strict';

function printNumbersInterval() {
	let a = 1;
	
	let timerId = setTimeout(function time() {
		console.log(a);
		a++
		if (a<21) setTimeout(time, 100);
	}, 100);
	
	

};

printNumbersInterval();


