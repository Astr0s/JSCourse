'use strict';

function sumArgs() {
	let reduce = [].reduce;

	let total = reduce.call(arguments, function(sum, current) {
		return sum +  current;
	}, 0);

	return total;
}

alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива

/*
Для решения примените метод reduce к arguments, используя call, apply или одалживание метода.
*/