"use strict";

let salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};


function salariesSum(obj) {
	let sum = 0;
	for (var num in obj) {
		sum += obj[num];
	}
	return sum;
};

alert(salariesSum(salaries));