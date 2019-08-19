'use strict';

function extend(Child, Parent) {
  Child.prototype = inherit(Parent.prototype);
  Child.prototype.constructor = Child;
  Child.parent = Parent.prototype;
}

function inherit(proto) {
  function F() {}
  F.prototype = proto;
  return new F;
}

function ExtendedClock(template) {
	Clock.apply(this, arguments);
	this._precision = template.precision;
}

extend(ExtendedClock, Clock);

ExtendedClock.prototype.start = function() {
	this.render();
	let self = this;
	this._timer = setInterval(function() {
    self.render();
	}, this._precision);
	
	
};

let newClock = new ExtendedClock({
      template: 'h:m:s',
	  precision: 10000
    });

	
//Zadacha
//http://learn.javascript.ru/class-inheritance#klass-rasshirennye-chasy

