var obj = {
className: 'my menu menu'
}

function removeClass(obj, cls) {
	var arr = obj.className.split(' ');
	
	for (i = 0; i < arr.length; i++) {
		
		if (arr[i] == cls) {
			arr[i] = '';
		}
	}
	
	obj.className = arr.join(' ');
}

removeClass(obj, 'menu');
removeClass(obj, 'blabla');

alert (obj.className);
