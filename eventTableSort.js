'use strict';

//JQuery

/*$(document).ready(() => {

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

});*/


//JavaScript
let targets = document.querySelectorAll('th');
console.log(targets);

targets.forEach(
function(target) {
	target.addEventListener('mouseover', function hover() {
	target.style = 'background-color: yellow';
	});

	target.addEventListener('mouseout', function leave() {
	target.style = 'background-color: white';
	});
});

class Grid {
    constructor(elem) {
      this.elem = elem;
      elem.onclick = this.onClick.bind(this); // (*)
    }

    string() {
      console.log('string');
    }

    number() {
      console.log('number');
    }

    onClick(event) {
      let type = event.target.dataset.type;
      if (type) {
        this[type]();
      }
    };
  }

new Grid(grid);

/*<!DOCTYPE HTML>
<html>

<head>
  <link rel="stylesheet" href="style.css">
  <meta charset="utf-8">
<script type="text/javascript" src="jquery.js"></script>

</head>

<body>

<table id="grid">
  <thead>
    <tr>
      <th data-type="number">Возраст</th>
      <th data-type="string">Имя</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>5</td>
      <td>Вася</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Петя</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Джон</td>
    </tr>
    <tr>
      <td>20</td>
      <td>Джорж</td>
    </tr>
    <tr>
      <td>25</td>
      <td>Джотаро</td>
    </tr>
    <tr>
      <td>30</td>
      <td>Жоске</td>
    </tr>
    </tbody>
</table>


  <script src = 'script.js'>
    // ...your code...
  </script>

</body>
</html>*/
