"use strict";

function Clock(options) {
	this.template = options.template;
}

Clock.prototype.render = function() {
	let date = new Date();

	let hours = date.getHours();
    if (hours < 10) hours = '0' + this.hours;

    let min = date.getMinutes();
    if (min < 10) min = '0' + min;
	
    let sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    let output = this.template.replace('h', hours).replace('m', min).replace('s', sec);
	
    console.log(output);
};

Clock.prototype.stop = function() {
	clearInterval(this._timer);
};

Clock.prototype.start = function() {
	
	let savedThis = this;
	let savedRender = this.render;
	
    this._timer = setInterval(function() {savedRender.apply(savedThis, arguments)}, 1000);
};

let clock = new Clock({
      template: 'h:m:s'
    });

//Zadacha
//http://learn.javascript.ru/class-inheritance#klass-chasy

