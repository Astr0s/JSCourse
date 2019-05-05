var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

function unique(arr) {
	var uniqueObj = {};
	
	for (i = 0; i < arr.length; i++ ) {
		
	var unique = arr[i];	
	uniqueObj[unique] = arr[i]
	
	}
	
	var uniqueArr = [];
	
	for (var key in uniqueObj) uniqueArr.push(uniqueObj[key]);
	
	return uniqueArr;
	
}

alert( unique(strings) );