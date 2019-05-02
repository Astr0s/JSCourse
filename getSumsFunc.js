var arr = [ 1, 2, 3, 4, 5 ]

function getSums(arr) {
	var newArr = [];
	var elem = arr.reduce(function (sum, current) {
		newArr.push(sum);
		return sum+current;
	},);
	
	newArr.push(elem);
	return newArr;

	
};

alert(getSums( arr ));
