'use strict';

//JQuery

$(document).ready(() => {

	$('ul, li').mouseover((event) => {
		$(event.target).css({fontWeight: 'bold'});
	})			

	$('ul, li').mouseout((event) => {
		$(event.target).css({fontWeight: 'normal'});
	})	

	$('ul').click((event) => {
		$(event.target).children().toggle('slow');
		event.stopPropagation();
	})

});


//JavaScript
/*const target = document.querySelector('ul');
target.onmouseover = target.onmouseout = handler;

function handler(event) {

	if (event.type == 'mouseover') {
	event.target.style = 'font-weight: bold';
	}
	if (event.type == 'mouseout') {
	event.target.style = 'font-weight: normal'
	}

}

document.addEventListener('click', (event) => {
	let elem = event.target.querySelector('ul');
	if (!elem) return;

	elem.hidden = !elem.hidden;
});
*/
