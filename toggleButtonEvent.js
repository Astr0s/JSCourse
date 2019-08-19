'use strict';

//JQuery

$(document).ready(()=>{
						   
	$(".pane .remove-button").click((event)=>{
		$(event.currentTarget).parents(".pane").animate({ opacity: 'hide' }, "slow");
	});

});

//JavaScript
/*document.addEventListener('click', (event) => {
	let elem = event.target.closest('.pane');

	if (!elem) return;

	elem.hidden = true;
});*/