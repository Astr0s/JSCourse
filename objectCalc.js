'use strict';

let calculator = {
	num1: 0,
	num2: 0,

	
	read: function() {
		this.num1 = +prompt('Введите первое число: ', 0);
		this.num2 = +prompt('Введите второе число: ', 0);
		
	},
	
	sum: function() {
		return this.num1+this.num2;
		
	},
	
	mul: function() {
		return this.num1*this.num2;
	},
	
	
	
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

/*
read() запрашивает prompt два значения и сохраняет их как свойства объекта
sum() возвращает сумму этих двух значений
mul() возвращает произведение этих двух значений
*/