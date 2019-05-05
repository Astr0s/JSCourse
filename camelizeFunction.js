

function camelize(str) {
	var otvet = str.split('-');
	for (var i = 1; i < otvet.length; i++) {
		
		otvet[i] = otvet[i][0].toUpperCase() + otvet[i].slice(1);
		str = otvet.join('');
	}
	return str
	
};



alert (camelize("background-color"));
alert (camelize("list-style-image"));
alert (camelize("-webkit-transition"));