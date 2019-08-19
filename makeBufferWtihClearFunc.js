'use strict';

function makeBuffer() {
	let tekst = '';
	
	function buffer(str){
		if (str == undefined) return tekst;
		return tekst += str;
	}
	
	buffer.clear = function() {
		tekst = '';
	};
	
	return buffer;
	
}

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() ); 