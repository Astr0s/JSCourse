'use strict';

function printNumbersInterval() {
	let a = 1;
	
	let timerId = setInterval(function() {
		console.log(a);
		a++;
	}, 100);
	
	setTimeout(function() {
		clearInterval(timerId);
	}, 2000);
	

};

printNumbersInterval();


