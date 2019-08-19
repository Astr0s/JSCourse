var obj = {
  className: 'open menu'
}

function addClass(obj, cls) {
	var arr = obj.className.split(' ');
	
	for (i = 0; i < arr.length; i++) {
		
		if (arr[i] == cls) {
			break
		}
		else {
			arr.push(cls)
			break
		}
	}
	
	obj.className = arr.join(' ');
	return obj
}

addClass(obj, 'new'); 
addClass(obj, 'open'); 
addClass(obj, 'me');

alert (obj.className);
