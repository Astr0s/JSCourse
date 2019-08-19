const arr = [5, 4, 3, 8, 0];


function filterRange(arr, a, b) {
	let newArr = [];
	let i = 0;
	while (i < (arr.length - 1)) {
			if ( a <= arr[i] && arr[i] <= b) {
				newArr.push(arr[i])
			};
			i++
	}
	return newArr;
};

alert(filterRange(arr, 3, 5));