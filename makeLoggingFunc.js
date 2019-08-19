"use strict";

function work(a) {
  /* ... */ // work - произвольная функция, один аргумент
}

function makeLogging(f, log) {
	return function() {	
	for (let item in arguments) {
		log.push(arguments[item]);
	};
	
	return f.apply(this, arguments);
	}
}

var log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

for (var i = 0; i < log.length; i++) {
  alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}


//Задача
//http://learn.javascript.ru/decorators#logiruyuschiy-dekorator-1-argument