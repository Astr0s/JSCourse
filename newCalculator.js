'use strict';

function Calculator () {

	this.read = function() {
		this.num1 = +prompt('Введите первое число: ', 0);
		this.num2 = +prompt('Введите второе число: ', 0);
		
	},
	
	this.sum = function() {
		return this.num1+this.num2;
		
	},
	
	this.mul = function() {
		return this.num1*this.num2;
	}
	
}


let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

/*
read() asks for two values using prompt and remembers them in object properties.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
*/