var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

function aclean(arr) {
	
	var lowArr = [];
	
		for (i = 0; i < arr.length; i++) {
			lowArr[i] = arr[i].toLowerCase();
		}
		
	arr = lowArr;
	
	var newArr = [];

	for (a = 0; a < arr.length; a++) {
			var splitA = arr[a].split('');
			splitA.sort();
			splitA = splitA.join('');

		for (b = a++; b < arr.length; b++) {
			var splitB = arr[b].split('');
			splitB.sort();
			splitB = splitB.join('');
			
			if (splitA == splitB) {
				newArr[a] = arr[a];
			}
		}
		
	}
	
	return newArr;
	
}

alert(aclean(arr))
