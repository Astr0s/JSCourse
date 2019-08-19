let n = prompt ("Введите число!", );


function fibBinet (n) {
	const fib = (1+Math.sqrt(5))/2;
	return Math.pow(fib, n)/Math.sqrt(5)

};

alert (fibBinet (n));