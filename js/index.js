var data1 = ['Banana',
	'Pear',
	'Orange',
	'Grapes',
	'Pineapple',
	'Avocado',
	'Blueberries',
	'Coconut',
	'Lychees',
	'Mango',
	'Strawberry'
]
var data2 = ['is', 'are']
var data3 = ['eating',
	'punching',
	'kicking',
	'smashing',
	'squeezing',
	'touching',
	'cutting',
	'slicing',
	'knocking'
]
var data4 = [
	'cilantro',
	'Broccoli',
	'cabbage',
	'lettuce',
	'cucumber',
	'carrots',
	'pepper',
	'garlic',
	'ginger',
	'mushroom'
]
var data5 = [
	'behind',
	'above',
	'across',
	'beside',
	'against',
	'between',
	'inside',
	'under',
	'by',
	'in',
	'beyond',
]
var data6 = [
	'a',
	'the'
]
var data7 = [
	'tree',
	'chair',
	'wall',
	'bed',
	'bowl',
	'coke',
	'book',
	'closet',
	'drawer',
	'bathroom',
	'curtain',
	'car',
	'door'
]

function changeWord() {
	var word1 = data1[Math.floor(Math.random() * data1.length)];
	//var word2 = data2[Math.floor(Math.random() * data2.length)];
	var word3 = data3[Math.floor(Math.random() * data3.length)];
	var word4 = data4[Math.floor(Math.random() * data4.length)];
	var word5 = data5[Math.floor(Math.random() * data5.length)];
	var word6 = data6[Math.floor(Math.random() * data6.length)];
	var word7 = data7[Math.floor(Math.random() * data7.length)];
	if (word1.indexOf('s') != -1)
		var word_1 = word1 + " " + data2[1] + " " + word3 + " " + word4 + " " + word5;
	else
		var word_1 = word1 + " " + data2[0] + " " + word3 + " " + word4 + " " + word5;
	var word_2 = word6 + " " + word7 + ".";
	//console.log(word);
	document.getElementById('word_1').innerHTML = word_1;
	document.getElementById('word_2').innerHTML = word_2;
}
window.setInterval(function() {
	changeWord();
}, 4000);

changeWord();
