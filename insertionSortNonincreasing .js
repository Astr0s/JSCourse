/*function isUndef (n) {
	if (n == 'undefined') return false;
	else return true

}
Спросить у Паши про i++ и i + 1, и про проверку на андефайнд
*/

function insertionSort (A, n) {
	for (var i = 1; i < n; i++) {
		var key = A[i];
		var j = i - 1;
		
		while ((j > -1) && (A[j] < key)) {
			A[j + 1] = A[j];
			j = j - 1	
		}
		
		A[j + 1] = key;
		alert(A);
	}
}

var array = [30, 10, 40, 20];

alert(insertionSort(array, array.length));