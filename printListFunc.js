var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

/*function printList(list) {
	for (i = 0; i <= 4; i++) {
		alert (list.value)
		list = list.next
	}
};*/

/*function printList(list) {
	
	alert (list.value);
	printList(list.next)

	}
*/

/*function printReverseList(list) {
	
	if (list.next) {
	printReverseList(list.next)
	}
	
	alert (list.value);

	}
*/



alert (printReverseList(list));