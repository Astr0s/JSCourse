'use strict';

function makeBuffer() {
	let buffer = '';
	
	
	return function (str) {
		 if (str == undefined) return buffer;
		 return buffer += str;
	};
	
}

var buffer = makeBuffer();

buffer(0);
buffer(1);
buffer(0);

alert( buffer() );
