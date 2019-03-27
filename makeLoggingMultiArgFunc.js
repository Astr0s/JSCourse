"use strict";

function work(a) {
  /* ... */ // work - произвольная функция, один аргумент
}

function makeLogging(f, log) {
	return function() {	
	let newLog = [];
	
	for (let item in arguments) {
		newLog.push(arguments[item]);
	};
	
	log.push(newLog);
	return f.apply(this, arguments);
	}
}

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
  alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}


//Zadacha
//http://learn.javascript.ru/decorators#logiruyuschiy-dekorator-mnogo-argumentov