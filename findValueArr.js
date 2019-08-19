const arr = ["test", 2, 1.5, false];

function findArr(arr, value) {
	for (i=0; i <= (arr.length - 1); i++) {
		if (value === arr[i]) {
			return i;
		}
		else {
			return -1;
		};
	};
};

alert(findArr(arr, 2));

