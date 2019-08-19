function unique(arr) {
	
	var obj = {};
	
	for (var i = 0; i < arr.length; i++) {
	var unique = arr[i];
	
	obj[unique] = true;	
	}
		
	return Object.keys(obj);
	
}

var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

alert( unique(strings) );

