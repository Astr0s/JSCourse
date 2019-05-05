var arr = [1, 2, 3, 4, 5];

function randomNumeric (a) {
	return (Math.random() * 10) - a;
}

arr.sort(randomNumeric);

alert (arr);
